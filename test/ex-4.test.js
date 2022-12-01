import fs from "fs/promises";

describe("test JS Function Hack Hour", () => {
  test("ex-4: Grouping Function with Objects", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} return {resultAdd, resultDivide}`;

    const func = new Function(code);
    const {resultAdd, resultDivide} = func();

    expect(resultAdd).toBe(30);
    expect(resultDivide).toBe(300);
  });
});
