/* Retorne um novo array de objeto usando map() contendo nome e a idade de cada passergers.
   Faça isso apartir do array passengers que está em data.js.
*/

const {passengers} = require('../../data')

const resultName = passengers.map(passenger => {
    return `${passenger.name} tem ${2020 - passenger.birthYear} anos de idade`
})

console.table(resultName)

