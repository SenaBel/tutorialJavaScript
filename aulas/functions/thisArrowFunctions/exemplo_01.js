
/* Criando uma this dentro de uma arrow function */

const printThis = () => {
    console.log(this)
}

/* Nesse exemplo assima ele irá imprimir o valor do window normal.
Porém eu não consigo passar um contexto de this pra dentro de uma arrow function*/