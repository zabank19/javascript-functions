import fs from "fs/promises";

describe("exercise-4 : test JS Function Hack Hour", () => {
  test("Function ต้องทำงานและได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return {calculator, addResult, devideResult}`;
    const func = new Function(code);
    const { calculator, addResult, devideResult } = func();
    expect(calculator.add(10, 2)).toBe(12);
    expect(calculator.subtract(10, 2)).toBe(8);
    expect(calculator.multiply(10, 2)).toBe(20);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(addResult).toBe(30);
    expect(devideResult).toBe(300);
  });
});
