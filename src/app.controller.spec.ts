import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!1"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!2"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!3"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!4"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!5"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
  });
});
