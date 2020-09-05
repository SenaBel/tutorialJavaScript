/*
    Buscar no arquivo "./data.js" o array products. 
    Retornar um novo array e esse novo array deverá conter todos os produtos, porém, os produtos
    que tem o preço igual ou acima de R$30,00 deverá custar a metade do preço original.
*/

const {products} = require('../../data')

function getProductPromotion(produto){
    if(produto.price >= 30){
        return {name: produto.name, price: produto.price / 2}
    }    
        return produto
} 

const resultProductPromotion = products.map(getProductPromotion)

//console.table(products)
console.table(resultProductPromotion)