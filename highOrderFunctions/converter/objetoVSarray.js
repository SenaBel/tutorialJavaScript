
// TRANSFORME ESSE OBJETO EM ARRAY

let objeto = {
    nome: "Abel Sena",
    endereco: "Rua yy",
    profissao: "Desenvolvedor",
    idade: "32",
}

// SOLUÇÃO

function objetoToArray(value){
    let result = []
    for(key of Object.keys(value)){
    //console.log(key)
    result.push(
        [key, value[key]]
    )
    }
    return result
}

console.log(objetoToArray(objeto))