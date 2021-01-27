
// TRANSFORME ESSE ARRAY EM OBJETO

var array = [
    ['nome', 'Sena'],
    ['endereco', 'Rua X'],
    ['profissao', 'Desenvolvedor'],
    ['idade', 30],
]

function arrayToObject(value){
    let result = {}

    for(recebe of value){
        result[recebe[0]] = recebe[1]
    }
    return result
}

let converter = arrayToObject(array)
console.log(converter)