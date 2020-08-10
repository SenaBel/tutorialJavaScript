
/* Outra forma de alterar o valor do "this" dentro de uma function é usando o operador "bind".
 O bind Não chama a função ele só passa quem vai ser o this e quem serão os seus parametros */

function Personage(parameter_01, parameter_02, parameter_03) {
  console.log(parameter_01, parameter_02, parameter_03);
  console.log("personage this", this);
}
var personageThis = {
  name: "Sena",
};

var pers = Personage.bind(personageThis, "Hello", "Sena", "!!!");
pers();
