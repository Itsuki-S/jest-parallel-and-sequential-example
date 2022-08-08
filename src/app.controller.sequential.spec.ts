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

  describe('root sequential', () => {
    it('should return "Hello World!1" sequential test', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!2" sequential test', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!3" sequential test', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!4" sequential test', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
    it('should return "Hello World!5" sequential test', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
  });
});
