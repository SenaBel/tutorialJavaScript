/*
    Busque no arquivo './data.js' o array phaseScores e observe que um jogador pode ter mais de um objeto.
    Usando o reduce mostre a pontuação total de um jogador.
*/

const {phaseScores} = require('../../data')

const jogador = 'abel sena'

const pontuacaoTotal = phaseScores.reduce((accumulator, item) => {
    if (item.name.toLowerCase() === jogador){
        accumulator += item.score
    }
    return accumulator
}, 0)

console.table(pontuacaoTotal)