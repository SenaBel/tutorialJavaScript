/* Criar um array de 08 objetos com as seguintes propriedades (NAME E AGE).
 05 dos objetos terá a idade maior que 18 e as demais serão menores que 18. Usando o metodo
 "reduce()" imprima na tela os grupos dos menores que 18 e o grupo dos maiores que 18. */

/* RESPOSTA */

const people = [
  {
    name: "Abel Sena",
    age: 27,
  },
  {
    name: "Lucas Oliveira",
    age: 14,
  },
  {
    name: "Thiago Santos",
    age: 23,
  },
  {
    name: "Gerson Torres",
    age: 21,
  },
  {
    name: "Luana Texeira",
    age: 32,
  },
  {
    name: "Flavia Oliveira",
    age: 15,
  },
  {
    name: "Vania Dias",
    age: 23,
  },
  {
    name: "Rebeca Yoshi",
    age: 17,
  },
];

const peopleGrouped = people.reduce(
  (valueAccumulated, valueArray) => {
    const biggerOrSmaller = valueArray.age >= 18 ? "MAIOR" : "MENOR";
    valueAccumulated[biggerOrSmaller].push(valueArray);

    return valueAccumulated;
  },
  { MAIOR: [], MENOR: [] }
);

console.log(peopleGrouped);
