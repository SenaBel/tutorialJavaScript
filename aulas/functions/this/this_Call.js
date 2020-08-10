// Outra forma de alterar o valor do "this" dentro de uma function é usando o operador "call"

function Personage(parameter_01, parameter_02, parameter_03) {
  console.log(parameter_01, parameter_02, parameter_03);
  console.log("personage this", this);
}
var personageThis = {
  name: "Sena",
};

Personage.call(personageThis, "Testing", 123, [{ name: "sena", age: 32 }]);
