import fs from "fs/promises";

describe("exercise-4 : test JS Function Hack Hour", () => {
  test("Functions ต้องทำงานและได้ผลลัพธ์ตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return {calculator, resultAdd, resultDivide}`;
    const func = new Function(code);
    const { calculator, resultAdd, resultDivide } = func();
    expect(calculator.add(10, 2)).toBe(12);
    expect(calculator.subtract(10, 2)).toBe(8);
    expect(calculator.multiply(10, 2)).toBe(20);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(resultAdd).toBe(30);
    expect(resultDivide).toBe(300);
  });
});
