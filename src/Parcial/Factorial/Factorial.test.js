const factorial = require("./Factorial");
describe("factorial", () => {
  test("calcular el factorial de un número ", () => {
    const resultado = factorial(5);
    const expectedResult = 120;
    expect(resultado).toEqual(expectedResult);
  });

  test("los argumentos deben de ser numeros enteros o lanzara error", () => {
    const arg = "h";
    const expectedError = new Error("Debe ser un numero entero");
    expect(() => factorial(arg)).toThrow(expectedError);
  });

  test("el argumento debe de ser positivo o lanzara error", () => {
    const arg = -5;
    const expectedError = new Error("debe ser un número entero positivo");
    expect(() => factorial(arg)).toThrow(expectedError);
  });

  test("el argumento debe ser menor a 170", () => {
    const arg = 171;
    const expectedError = new Error("el argumento no puede ser mayor a 170");
    expect(() => factorial(arg)).toThrow(expectedError);
  });
});