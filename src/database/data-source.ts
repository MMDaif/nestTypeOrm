import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';



// ((configService: ConfigService) => {
//   const options2: DataSourceOptions = {
//     type: 'postgres',
//     host: configService.get('DB_HOST'),
//     port: +configService.get('DB_PORT'),
//     username: configService.get('DB_USER_NAME'),
//     password: configService.get('DB_PASSWORD'),
//     database: configService.get('DB_NAME'),
//     // autoLoadEntities: true,
//     synchronize: true,
//     logging: true,
//     migrations: ['src/migration/*{.ts,.js}'],
//     migrationsTableName: 'db_migration_table',
//     //  seeds: [UserSeeder],
//     //factories: [UserSeeder],
//     migrationsRun: true,
//   };
//   console.log({ options2 });
// });

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: 'nest',
  password: 'admin',
  database: 'test',
  entities: ['src/domain/entities/**/*.entity.ts'],
  synchronize: true,
//  migrations: ['dist/src/database/migrations.js'],

  seeds: ['src/database/seeds/*{.ts,.js}'],
  factories: ['src/database/factories/*{.ts,.js}'],
};

console.log({ options });
export const dataSource = new DataSource(options);
