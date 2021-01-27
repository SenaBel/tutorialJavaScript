/*
01) Verificando o array shopCart, qual o valor total desse carrinho de compras?
*/

const {shopCart} = require('../../data')

const resultShopCart = shopCart.reduce((acc, item) => {
    return acc + item.quantity * item.unitPrice
}, 0)

console.log(resultShopCart)

/*
02) Mostre a quantidade total de produtos do carrinho
*/

const totalProduct = shopCart.reduce((acc, prod) => {
    return acc + prod.quantity
}, 0)

console.log(totalProduct)
