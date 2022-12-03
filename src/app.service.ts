import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Eduardo from pipeline Hoy Sabado 3 de diciembre Intento 500!';
  }
}
