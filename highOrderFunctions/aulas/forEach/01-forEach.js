/*
    O forEach ele não é imutavel. Ele pega o objeto que agente está usando e modifica o objeto.
    O forEach não retorna por si só um novo objeto.

    Adicione no array de objeto passengers que está em data.js a propriedade age mostrando a idade
    de cada passengers usando o forEach().
*/

const {passengers} = require('../../data')

passengers.forEach(passenger => {
    passenger.idade = 2020 - passenger.birthYear
})

console.table(passengers)
