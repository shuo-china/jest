import { fetchData } from "./fetchData";

test("fetchData返回结果为{success:true}", () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});
