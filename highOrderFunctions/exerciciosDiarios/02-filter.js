/*
01 - Buscar no Objeto que está em (../../data.js) o array de mailList e usar o for
para filtrar apenas os emails com o dominio "abelsena.com". 
02 - Deposis de usar o for. Agora você busca os emails com dominio "abelsena.com" usando o filter.
*/

const {mailList} = require('../data')

const getMailList = []

for(var i = 0; i < mailList.length; i++){
    if(mailList[i].includes('abelsena.com'))
        getMailList.push(mailList[i])   
}
console.table(getMailList)

const resultMailListFiltered = mailList.filter(email => email.includes('magno.com'))

console.table(resultMailListFiltered)