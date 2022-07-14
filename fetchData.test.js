import { fetchData } from "./fetchData";

test("fetchData返回结果为{success:true}", () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
