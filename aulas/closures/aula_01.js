/*Qual a vantagem de usar closures? É que lhe permite criar funções privadas  */

function printName() {
  let name = "Abel";
  return function () {
    return name;
  };
}
var func = printName();
console.log(func());

function myLibrary() {
  function auxiliary(valor) {
    return 10 + valor;
  }
  return {
    add5() {
      return auxiliary(10);
    },
    add7() {
      return auxiliary(20);
    },
  };
}
var library = myLibrary();
console.log(library);

console.log(library.add5());
console.log(library.add7());
