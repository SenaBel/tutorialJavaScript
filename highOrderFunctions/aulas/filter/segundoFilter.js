/*
Filtar todos os e-mails que tem o dominio "@abelsena" usando o for.
*/

// 1º Forma de Resolver sem usar o filter:

const {mailList} = require('../../data')

const getMailList = []

for(var i = 0; i < mailList.length; i++){
    if(mailList[i].includes('abelsena.com'))

    getMailList.push(mailList[i])
}
console.table(getMailList)

// Resolvendo o problema usando filter:

const resultMailListFiltered = mailList.filter(mail => mail.includes('magno.com'))

console.table(resultMailListFiltered)