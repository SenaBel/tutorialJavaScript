


    function parseToAcent(word) {

      word = word.toLowerCase()
      const parseWord = { sao paulo: "são paulo", cubatao: "cubatão" };
      return parseWord[word] ? parseWord[word] : word;
    }

    const cleaned = (address.toLowerCase().split(" ")).map(valor => {
        let receive = parseToAcent(valor);
        return receive.charAt(0).toUpperCase() + receive.slice(1);
        
      }).join(" ");
   //console.log(cleaned);
    return cleaned ;
  }



  'MARIA JOAO'.toLocaleLowerCase().split('')
   ["maria", "joao"]
  ["maria joao"]

  ["maria joao"].join('m')

    "maria joao"

  ["maria", "joao"].join('?')
"maria?joao"