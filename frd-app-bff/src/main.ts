import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const swaggerConfig = new DocumentBuilder().setTitle("Frd BFF").setDescription("Description").setVersion('1.0').build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig));
  await app.listen(3000);
}
bootstrap();
