//no hace falta importar jest, porque jest una vez instalado detecta automaticamente
//los archivos test.js
//antes de instalar hacer la configuracion en el archivo package.json
const { palindrome } = require("../utils/for_testing");

//TEST_UNITARIOS - comprueba una funcion en concreto
//le ponemos nombre a nuestro test y hacemos la comparacion del resultado con el expect
test("palindrome of will", () => {
  //palindrome hace lo que recibe
  //de paso lo convierte el texto en reverso
  const result = palindrome("will");
  //expec hace de que espera que el resultado sea ese.
  //si no coincide tirara error no erra lo que se esperaba
  //con el toBe ace la comparacion con el result
  expect(result).toBe("lliw"); //correcto
  // expect(result).toBe("wisad"); //error
});

test("palindrome of empty string", () => {
  //recibimos un palindrome vacio y lo convierte tipo string
  //desde la funcion palindrome
  const result = palindrome("");
  //esperamos un string vacio
  expect(result).toBe(""); //correcto
});

test("palindrome of undefined", () => {
  //le damos un parametrro vacio
  const result = palindrome();
  //queremos recibir un string
  expect(result).toBeUndefined(); //error, y nos muestra en consola cual fue le causante de ese error bieeeeeen
  //luego de mostrarnos el error podemos solucionar el palindrome gracias al test
});
