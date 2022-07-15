import Counter from "./counter";

let counter = null;
beforeEach(() => {
  counter = new Counter();
});

describe("测试加法", () => {
  test("测试 Counter 中的 addOne 方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });
});

describe("测试减法", () => {
  test("测试 Counter 中的 minusOne 方法", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });
});
