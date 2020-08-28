
// 1°) Filtrar todas as criaçãs que tem entre 2 e 11 anos usando o metodo filter.

const {childrenAge} = require('../../data')
function getChildrenAge(element){
    if(element <= 11  && element >= 2) return true
    return false
}
const resultChildrenFiltered = childrenAge.filter(getChildrenAge)
// Obs. O filter não altera o array de childrenAge e isso é chamado de IMUTABILIDADE
// Ou seja, não vai alterar o objeto mais vai me devolver um objeto novo.
//console.log(childrenAge);
console.table(resultChildrenFiltered);


// Obs. Segunda forma de resolver esse exercicio é da seguinte maneira:
const resultChildrenFiltered01 =  childrenAge.filter((element) => {
    return (element <= 11 && element >=2) ? true : false
   
})
console.table(resultChildrenFiltered01)

// Obs. Terceira forma de resolver esse exercicio é da seguinte maneira:
const resultChildrenFiltered02 = childrenAge.filter(element =>
    element <= 11 && element >=2 
)

console.table(resultChildrenFiltered02)




