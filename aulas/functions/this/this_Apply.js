/* Outra forma de alterar o valor do "this" dentro de uma function é usando o operador "apply".
 No apply os parametros tem que ser passado dentro de um array */

function Personage(parameter_01, parameter_02, parameter_03) {
  console.log(parameter_01, parameter_02, parameter_03);
  console.log("personage this", this);
}
var personageThis = {
  name: "Sena",
};

Personage.apply([personageThis, 'Checking', 321, ['oliveira', 'senabel']])