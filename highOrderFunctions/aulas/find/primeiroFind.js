/*
Caso você tem um sisteminha que queira fazer uma pesquisa pelo nome você pode usar o ".find()".

-- EXERCICIO --
1) Encotre no array passengers no arquivo ('../../data.js) e faça a pesquisa do nome Abel usando o .find().
*/

const {passengers} = require('../../data')

const searchName = 'abel'

function getSearchName(element){
    if(element.name.toLowerCase() === searchName) return true
    return false
}

const resultPassengers = passengers.find(getSearchName)
console.table(resultPassengers)

if (!resultPassengers) return console.log('Não foi encontrado!')
