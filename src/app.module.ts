import { Module } from '@nestjs/common';
import { AppController, CommsController } from './app.controller';
import { AppService, CommsService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CommsController],
  providers: [AppService, CommsService],
})
export class AppModule {}
