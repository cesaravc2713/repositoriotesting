const Primo = require("./Primo")

describe("esPrimo", () => {
  test("true si es primo", () => {
    const numero = 7;
    const expectedResult = true;
    expect(Primo(numero)).toEqual(expectedResult);
  });

  test("false si no es primo", () => {
    const numero = 8;
    const expectedResult = false;
    expect(Primo(numero)).toEqual(expectedResult);
  });

  test("1 no se considera primo", () => {
    const numero = 1;
    const expectedResult = false;
    expect(Primo(numero)).toEqual(expectedResult);
  });
});