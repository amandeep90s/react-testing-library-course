import { getUser } from "./getUser";

describe("When everything is OK", () => {
  test("should return a response", async () => {
    const result = await getUser();
    expect(result).toEqual({ id: "1", name: "Amandeep" });
  });
});
