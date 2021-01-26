
// OBSERVE OS OBJETOS ABAIXO

let magno = {
    nome: "Magno Santos",
    cursos: ["Ciências da Computação", "Arquitetura de Software", "Estrutura de Dados"],
    isActive: true,
    points: 1500
};

let fabio = {
    nome: "Fabio Busnello",
    cursos: ["Engenharia da Computação", "Node Js", "Redes"],
    isActive: true,
    points: 2029
};

let abel = {
    nome: "Abel Sena",
    cursos: ["Ciências da Computação", "JavaScript", "Angula9"],
    isActive: false,
    points: 1526
};

let estudantes = [magno, fabio, abel]
    //console.log(estudantes)

// EXERCÍCIO 01: IMPRIMIR APENAS O NOME DE CADA ESTUDANTE
    for (estudante of estudantes){
        console.log(estudante.nome)
    }

// EXERCICIO 02: IMPRIMIR OS CURSOS DE CADA ESTUDANTE DENTRO DA SEGUINTE FRASE:
// O estudante X está cursando: YYY

    for(estudante of estudantes){
        console.log("O estudante " + estudante.nome + " está cursando: ")
        for(curso of estudante.cursos){
            console.log(curso)
        }
        console.log("________________________________________________________________")

        }

//EXERCICIO 03: SOMAR OS PONTOS DE TODOS OS ESTUDANTES
    let pointsTotal = 0
    for (estudante of estudantes){
       pointsTotal += estudante.points
    }
    console.log("A soma é: ", pointsTotal)
// Resolvendo exercicio 03 usando reduce

  let valorTotal = estudantes.reduce((a,c) => a + c.points, 0)
  console.log(valorTotal)
 
