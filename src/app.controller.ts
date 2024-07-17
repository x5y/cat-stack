import { Controller, Get, Param } from '@nestjs/common';
import { AppService, CommsService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('comms/your-next-delivery/')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get(':id')
  getNextDelivery(@Param() params: any): string {
    return this.commsService.getNextDelivery(params.id);
  }
}
