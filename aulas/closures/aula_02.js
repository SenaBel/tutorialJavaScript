
/* Como evitar funções anonimas usando closures */

function printFullName(name){
  return function(){
      console.log(name, 'Abel')
  }
}

function initial(){
    let name = 'Sena'

    setTimeout(printFullName(name), 4000)  // Aqui estou executando uma function que executa outra function
}
initial()