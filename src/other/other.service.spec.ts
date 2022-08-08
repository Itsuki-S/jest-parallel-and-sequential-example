import { OtherService } from "./other.service";

describe("OtherService", () => {
  const otherService = new OtherService
  it('should return "Hello World!"', async () => {
    expect(await otherService.sayHello()).toBe('Hello World!');
  })
  it('should return "GoodMorning!"', async () => {
    expect(await otherService.sayGoodMorning()).toBe('GoodMorning!');
  })
  it('should return "GoodAfternoon!"', async () => {
    expect(await otherService.sayGoodAfternoon()).toBe('GoodAfternoon!');
  })
  it('should return "Goodbye!"', async () => {
    expect(await otherService.sayGoodbye()).toBe('Goodbye!');
  })
})