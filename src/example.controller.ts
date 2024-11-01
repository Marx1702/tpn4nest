// example.controller.ts
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  @Get()
  async getExample() {
    throw new HttpException('Example error', HttpStatus.BAD_REQUEST);
  }
}
