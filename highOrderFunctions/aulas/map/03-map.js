/* 
 Encontre o nome palíndromo no array passengers usando o map
 O que é palindromo? É o nome que a mesma pronuncia de traz pra frente e de frente pra tráz por exemplo "ana"
*/

// metodo call recebe 02 parametros (1° pode ser um string, 2° pode ser uma function)
// metodo reverse ele vai lê de tras pra frente
// metodo join ele vai juntar os elementos do array

const {passengers} = require('../../data')

const retornar = passengers.map(passenger => {
    console.log("letra: ", [].map.call(passenger.name, letra => letra).reverse().join(''))
    const reverterNome = [].map
        .call(passenger.name, letra => letra)
        .reverse()
        .join("")

    if(reverterNome.toLowerCase() === passenger.name.toLowerCase())
        return  `Esse nome é palindromo: ${passenger.name}` 
})
//founds
console.table(retornar)

// const digiteName = 'abel sena'

// const name = x => x.split('').reverse().join('')
// console.log(name(digiteName))