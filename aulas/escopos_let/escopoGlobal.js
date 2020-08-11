/* Escopo global: É tudo o que vocÊ declara ali no seu arquivo principal do javascript que é acessivel 
por toda a sua aplicação. Exemplo abaixo: */

const name = "Abel"
console.log(name)

/* Irem invoca-la em uma function agora  e ela vai responder */

function printName(){
    console.log(name)
}
printName()

/* Qualquer coisa que eu criar aqui nesse codigo ele vai enxergar a variavél name */