import { Controller, Get } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @GrpcStreamMethod('DemoService', 'FindAccount')
  @GrpcMethod('DemoService', 'FindAccount')
  getHello() {
    return {
      code: 0,
      msg: 'my msg',
      list: {
        id: 3,
        username: 'jv2',
        nickname: 'mv2',
        address: 'mv2',
        photo: 'photo url',
      },
    };
  }
}
