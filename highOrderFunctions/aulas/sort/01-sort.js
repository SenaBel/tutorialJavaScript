/*
SORT: ELE SERVE PARA ORDENAR ELEMENTOS. A ORDENAÇÃO SEGUE A REGRA DO UNICODE ASCII
É TIPO UMA COMPARAÇÃO

1) Organize o carrinho do maior número de produtos para o menor
*/

const {shopCart, passengers} = require('../../data')

const orderByTotalProducts = shopCart.sort((a, b )=> 
    b.quantity - a.quantity
)
//console.table(orderByTotalProducts)

/*
2) Organize os passageiros por nome
*/
const orderByPassengerName = passengers.sort((a, b) => {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
    return 0
})
console.table(orderByPassengerName)