import { OtherService } from "./other.service";

describe("OtherService sequential", () => {
  const otherService = new OtherService
  it('sequential test "Hello World!"', async () => {
    expect(await otherService.sayHello()).toBe('Hello World!');
  })
  it('sequential test "GoodMorning!"', async () => {
    expect(await otherService.sayGoodMorning()).toBe('GoodMorning!');
  })
  it('sequential test "GoodAfternoon!"', async () => {
    expect(await otherService.sayGoodAfternoon()).toBe('GoodAfternoon!');
  })
  it('sequential test "Goodbye!"', async () => {
    expect(await otherService.sayGoodbye()).toBe('Goodbye!');
  })
})