/*
Busque no arquivo "data.js" o array de users e me retorne um novo array apenas com os usuários
premium igual a true.
*/
const {users} = require('../../data')

function getNewUsersTrue(item){
    return item.premium === true
}

const resultNewUsersTrueFiltered = users.filter(getNewUsersTrue)

console.table(resultNewUsersTrueFiltered)