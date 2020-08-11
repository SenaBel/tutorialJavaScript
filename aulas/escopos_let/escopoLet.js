/* Usando escopo com let */

if (true) {
    var youtube = 'devsena'
    console.log(youtube)
    let author = 'Sena'
    console.log(author)
}
console.log(youtube)
//console.log(author)

/* Ou seja quando você desejar acessar a variavel fora do bloco if usa o "var" caso contrario
usa o let */

/* Segue o exemplo de como redeclarar o valor de uma variavel com let */

let lastName = 'Oliveira'
console.log(lastName)
//let lastName = 'Oliveira Sena' Não vai funcionar devido o nome do let está no inicio da variavel
lastName = 'Oliveira Sena'
console.log(lastName)

// Eu consigo criar outro bloco isolado conforme o exemplo abaixo:
{
    let lastName = 'Torres'
    console.log(lastName)
}