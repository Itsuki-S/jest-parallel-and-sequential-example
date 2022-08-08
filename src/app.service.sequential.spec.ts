import { AppService } from "./app.service";

describe("AppService sequential", () => {
  const appService = new AppService
  it('sequential test "Hello World!"', async () => {
    expect(await appService.getHello()).toBe('Hello World!');
  })
  it('sequential test "GoodMorning!"', async () => {
    expect(await appService.getGoodMorning()).toBe('GoodMorning!');
  })
  it('sequential test "GoodAfternoon!"', async () => {
    expect(await appService.getGoodAfternoon()).toBe('GoodAfternoon!');
  })
  it('sequential test "Goodbye!"', async () => {
    expect(await appService.getGoodbye()).toBe('Goodbye!');
  })
})