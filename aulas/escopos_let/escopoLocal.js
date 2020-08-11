/* Escopo Local: São variaveis ou funções que estão acessiveis apenas dentro de um escopo de uma função.
Segue exemplo abaixo: */

function printAge(){
    const age = 32
    console.log(age)
}
printAge()

//console.log(age)

/* No explo acima tudo ok. Agora se eu executar o console.log(age) fora da função printAge não estará
acessivel. */