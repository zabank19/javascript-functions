import fs from "fs/promises";

describe("exercise-5 : test JS Function Hack Hour", () => {
  test("Function จะทำหน้าในการหาเลขน้อยที่สุดระหว่างตัวเลขสองตัว", async () => {
    const data = await fs.readFile("./ex-5.js");
    const code = `${data} \n return findMinNumber`;

    const func = new Function(code);
    const result = func();

    expect(result(10, 20)).toBe(10);
  });
});
