
/* Criar um array de números com 10 posições, depois filtrar os números que divide por 2
usando o "filter()", agora percorre esses números usando "map()" e multiplique por 3.*/

 /* RESPOSTA */

 const numbers = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]
 const filter = numbers.filter(numbers => numbers % 2 === 0).map(numbers => numbers * 2)

 console.log(numbers)
 console.log(filter)