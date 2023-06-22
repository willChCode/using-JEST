//un palindrome es un metodo que da la vuelta a la pagina para ver si la aprte de atras es igual a la parte de delante
//creando un palindrome que recive un parametro y hace que el texto sea reverso
const palindrome = (string) => {
  //resolviendo erro gracias al test
  if (typeof string === "undefined") return undefined;
  // if (string === undefined) return undefined; tambien usar este

  return string.split("").reverse("").join("");
};
const average = (array) => {
  //resolver por si es undefined con testing
  if (array === undefined) return undefined;
  let suma = 0;
  array.forEach((num) => {
    suma += num;
  });
  return suma / array.length;
};
module.exports = {
  palindrome,
  average,
};
