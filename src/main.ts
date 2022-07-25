import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('E-commerce App')
    .setDescription('The E-commerce API description')
    .setVersion('1.0')
    .addTag('E-commerce')
    .addBearerAuth(
      { type: 'http', in: 'header', scheme: 'bearer', description: 'add user token to be authenticated', bearerFormat: 'JWT' },
      'JWT-auth',
    )
    .setExternalDoc('swagger document', `http://[::1]:3000/swagger-json.json`)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(helmet());
  app.enableCors({ origin: 'http://localhost:4200', allowedHeaders: '*', methods: '*' });
  await app.listen(3000);
  console.info(`${await app.getUrl()}/swagger`);
}
bootstrap();
