/*
    Busque no arquivo './data.js' o array plaseScores e o bserve que um jogador pode ter mais de um objeto.
    Usando o reduce mostre a pontuação total de um jogador.
*/
const {phaseScores} = require('./data')

const scoreTotalPlayer = phaseScores.reduce((accumulator, item) => {
    if(item.name === 'Abel Sena') {
        accumulator += item.score
    }
    return accumulator
}, 0)

console.table(scoreTotalPlayer)