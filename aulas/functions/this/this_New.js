
// Alterando o valor do "this" dentro de uma function usando operador "new"

function User() {
  (this.name = "Abel Sena"),
    (this.age = 32),
    (this.soma = function (a, b) {
      return a + b;
    });
}
var user = new User();
console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user.soma(5, 5));
