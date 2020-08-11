/* Escopo Lexical: É basicamente quando você tenta imprimir um valor de uma variável e ele já sabe qual é
o valor desta variavel, ele não precisa descobrir igual o espoco dinâmico porque o valor dela já foi 
definido. Exemplo de um escopo Lexical: */

function user(){
    const name = "BelSena"
    //console.log(name)
        return function() {
            const age = 32
            console.log(name, age)
    } 
}
const printUser = user()
printUser()