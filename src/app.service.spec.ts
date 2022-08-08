import { AppService } from "./app.service";

describe("AppService", () => {
  const appService = new AppService
  it('should return "Hello World!"', async () => {
    expect(await appService.getHello()).toBe('Hello World!');
  })
  it('should return "GoodMorning!"', async () => {
    expect(await appService.getGoodMorning()).toBe('GoodMorning!');
  })
  it('should return "GoodAfternoon!"', async () => {
    expect(await appService.getGoodAfternoon()).toBe('GoodAfternoon!');
  })
  it('should return "Goodbye!"', async () => {
    expect(await appService.getGoodbye()).toBe('Goodbye!');
  })
})