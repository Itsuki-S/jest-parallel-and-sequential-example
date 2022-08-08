import { Injectable } from '@nestjs/common';
import { delay } from '../common/helper';

@Injectable()
export class OtherService {
  async sayHello(): Promise<string> {
    await delay(1000);
    return 'Hello World!';
  }
  async sayGoodMorning(): Promise<string>  {
    await delay(1000);
    return 'GoodMorning!';
  }
  async sayGoodAfternoon(): Promise<string>  {
    await delay(1000);
    return 'GoodAfternoon!';
  }
  async sayGoodbye(): Promise<string>  {
    await delay(1000);
    return 'Goodbye!';
  }
}
