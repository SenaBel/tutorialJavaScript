
var teste = "abel oliveira sena";
teste = teste.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

console.log(teste);

// SEM REGEX

function titleize(text) {
    var loweredText = text.toLowerCase();
    var words = loweredText.split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];

        var firstLetter = w[0];
        w = firstLetter.toUpperCase() + w.slice(1);

        words[a] = w;
    }
    return words.join(' ');
}
console.log(titleize('abel sena'))

function titleize01(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

function converterNomes(value){
    let nomeMinusculo = value.toLowerCase()
    let nomeNoArray = nomeMinusculo.split(" ")

    let nomes = nomeNoArray.map((nome) => {
        let primeiraLetra = nome[0]
        if(nome.length > 2){
            return primeiraLetra.toUpperCase() + nome.slice(1)
        } return primeiraLetra + nome.slice(1)
    })
    return nomes.join(" ")
}