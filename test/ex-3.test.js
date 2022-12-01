import fs from "fs/promises";

describe("test JS Function Hack Hour", () => {
  test("ex-3: Declaring Arrow Function", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return {add, subtract, multiply, divide}`;

    const func = new Function(code);
    const { add, subtract, multiply, divide } = func();
    expect(add(10, 2)).toBe(12);
    expect(subtract(10, 2)).toBe(8);
    expect(multiply(10, 2)).toBe(20);
    expect(divide(10, 2)).toBe(5);
  });
});
