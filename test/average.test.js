const { average } = require("../utils/for_testing");

//vamos a agrupar los nombres del test para no repetir el nombre del test en todos
describe("average", () => {
  test("de un valor es el mismo valor experado", () => {
    const result = average([1]);
    expect(result).toBe(1);
  });
  test("de tres valore es la suma / entre la longitud del arreglo", () => {
    const result = average([1, 2, 3]);
    expect(result).toBe(2);
  });
  test("undefined", () => {
    const result = average();
    // expect(result).toBe(2); //error se esperaba undefined
    expect(result).toBeUndefined(); //correcto
  });
  test("si el valor es 0", () => {
    const result = average([0]);
    // expect(result).toBe(2); //error se esperaba undefined
    expect(result).toBe(0); //correcto retorna 0
  });
});
