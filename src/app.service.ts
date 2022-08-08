import { Injectable } from '@nestjs/common';
import { delay } from './common/helper';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await delay(1000);
    return 'Hello World!';
  }
  async getGoodMorning(): Promise<string>  {
    await delay(1000);
    return 'GoodMorning!';
  }
  async getGoodAfternoon(): Promise<string>  {
    await delay(1000);
    return 'GoodAfternoon!';
  }
  async getGoodbye(): Promise<string>  {
    await delay(1000);
    return 'Goodbye!';
  }
}
