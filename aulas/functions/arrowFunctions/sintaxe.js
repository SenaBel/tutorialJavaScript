
//sintaxe de Arrow Function

const count = (a,  b) => {
    return a + b
}
console.log(count (10, 5))

/* Nesse exemplo acima a Arrow Function pode ficar mais curta ainda. Quando criamos uma function
que retorna um valor imediato, podemos fazer conforme o exemplo abaixo. */

const countImmediate = (a, b) => a + b
console.log(countImmediate(25, 30))

/* OBS. Isso acontece por que o javascript entende que quando você insere a setinha direto em uma expressão
o valor terá que retornar e não precisa escrever a palavra "return" e também não preciso colocar {} se colocar
irá dar erro. Caso eu queira fechar o bloco de codigo depois da setinho eu uso (). */

/* Caso eu queira criar uma arrow function com um único parametro eu posso omitir os () dela, por exemplo: */

const address = country => (
    {
        city: 'Taboão da Serra',
        state: 'SP',
        country
    }
)
console.log(address('Brasil'))