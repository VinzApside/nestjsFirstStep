import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { hello } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(hello)
  await app.listen(8000);
}
bootstrap();
