
// Adicionar uma propriedade em um objeto

const {passengers} = require('../../data')
console.table(passengers)

let criationColum = passengers.map(pass => {
    pass.name = "Teste",
    pass.birthYear = 1985
    
    return ({
        ...pass,  
       
        //sobrenome: ''
})


})

 

console.table(criationColum)