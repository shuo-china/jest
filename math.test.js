import { add } from "./math";

test("3 + 7", () => {
  expect(add(3, 7)).toBe(10);
});
