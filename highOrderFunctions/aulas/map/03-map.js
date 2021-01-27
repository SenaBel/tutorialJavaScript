/*
    Encontre o nome palíndromo no array passengers usando o map

*/
const {passengers} = require('../../data')

const founds = passengers.map(passenger => {
    const reserveName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("")

    if(reserveName.toLowerCase() === passenger.name.toLowerCase())
    return  `This is palindromo: ${passenger.name}` 
})

//console.table(founds)

const digiteName = 'abel sena'

const name = x => x.split('').reverse().join('')
console.log(name(digiteName))