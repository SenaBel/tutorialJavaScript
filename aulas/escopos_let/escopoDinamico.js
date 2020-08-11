/* Escopo Dinâmico: É um escopo que quando tentamos imprimir um valor de uma variavel ele não sabe qual
é o valor até que ela seja executada. Exemplo: */

function printThis(){
    console.log('Imprimir This', this)
}

function printMessage(){
    printThis.call({msg: 'Sou um objeto JavaScript'})
}

function printMessage2(){
    printThis.call(['Sou um array java script'])
}

printMessage()
printMessage2()