import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('DemoService', 'FindAccount')
  getHello() {
    return {
      code: 0,
      msg: 'my msg',
      list: {
        id: 2,
        username: 'j',
        nickname: 'm',
        address: 'm',
        photo: 'photo url',
      },
    };
  }
}
