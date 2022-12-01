import fs from "fs/promises";

describe("test JS Function Hack Hour", () => {
  test("ex-5: Min Function", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} return minNumber`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(10);
  });
});
