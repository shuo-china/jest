import { fetchData } from "./fetchData";

test("fetchData await", async () => {
  try {
    const response = await fetchData();
    expect(response).toMatchObject({
      data: {
        success: true,
      },
    });
  } catch (error) {
    expect(error.toString().includes("404")).toEqual(true);
  }
});
