import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* Entry point of nestjs application
  code gets compiled to javascript
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
