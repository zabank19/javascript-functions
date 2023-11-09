import fs from "fs/promises";

describe("exercise-1 : test JS Function Hack Hour", () => {
  test("Function ต้องทำงานและได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} \n return {add, subtract, multiply, divide}`;

    const func = new Function(code);
    const { add, subtract, multiply, divide } = func();
    expect(add(10, 2)).toBe(12);
    expect(subtract(10, 2)).toBe(8);
    expect(multiply(10, 2)).toBe(20);
    expect(divide(10, 2)).toBe(5);
  });
});
