import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { createDatabase, runSeeders } from 'typeorm-extension';
import { ThrottlerModule } from '@nestjs/throttler';
import { CategoriesModule } from './application/categories/categories.module';

import { entities } from './domain/entities';
import { UserSeeder } from './database';
import { DataSource, DataSourceOptions } from 'typeorm';
import userFactory from './database/factories/user.factory';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('Rate_Limit_TTL'),
        limit: config.get('Rate_Limit_Count'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dataSourceBasicOptions: DataSourceOptions = {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USER_NAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities,
          logging: true,
        };
        await createDatabase({
          ifNotExist: true,
          options: dataSourceBasicOptions,
          synchronize: true,
        });
        const options: DataSourceOptions = {
          ...dataSourceBasicOptions,
          synchronize: false,
        };
        // await runSeeders(new DataSource(options), {
        //   seeds: [UserSeeder],
        //   factories: [userFactory],
        // });
        return options;
      },
    }),
    CategoriesModule,
  ],
})
export class AppModule {}
