import { Body, Controller, Get, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { PatchHelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Patch()
  patchHello(@Body() dto: PatchHelloDto) {
    return `hello ${dto.name}`;
  }
}
