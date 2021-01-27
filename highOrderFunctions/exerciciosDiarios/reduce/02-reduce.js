/*
 Exiba no console uma lista dos nomes dos jogos do array cart;
 A lista deve ter a formatação exemplificada abaixo do array, considerando 
 inclusive o traço e o espaço antes de cada nome.
 Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/
  /*
    - Nome 1
    - Nome 2
    - Nome 3
  */

  const {cart} = require('../../data')

  const newCart = cart.reduce((acumulador, item) => {
    return acumulador + '- ' + 'Name ' + ' ' + item.name + '\n'
  }, '')
  console.table(newCart)

  
