/*
Observe o objeto abaixo e retorne a soma dos valores de cada exame e depois junte todos os valores de todos os exames.
*/

const data = {
    "count": 19,
    "rows": [
      {
        "id": 20,
        "idLabs": 1,
        "title": "Sena- Teste",
        "desc": "Lorem .",
        "position": 0,
        "exams": [
          {
            "idLabs_exams": 42562,
            "title": "Ultrassonografia, pescoço, de 0 a 2 anos e 11 meses",
            "preparation": "Nunc elementum nulla ut tincidunt lacinia. ",
            "price": 692,
            "priceSena": 143.94,
            "fees": 10
          },
          {
            "idLabs_exams": 42553,
            "title": "Ressonância Magnética",
            "preparation": "Nunc elementum nulla ut tincidunt lacinia. ",
            "price": 152.32,
            "priceSena": 143.94,
            "fees": 10
          },
          {
            "idLabs_exams": 42554,
            "title": "Raio X / Radiologia convencional e contrastada",
            "preparation": "Nunc elementum nulla ut tincidunt lacinia. ",
            "price": 325.44,
            "priceSena": 143.94,
            "fees": 10
          }
        ],
        "medics": [
          
        ]
      },
      {
        "id": 23,
        "idLabs": 1,
        "title": "Check-up do Homem até 50 anos",
        "desc": "x",
        "position": 0,
        "exams": [
          {
            "idLabs_exams": 41539,
            "title": "Hemograma, sangue total",
            "preparation": "x",
            "price": 83,
            "priceSena": 11.1,
            "fees": 10
          },
          {
            "idLabs_exams": 41531,
            "title": "Hemoglobina glicada, por imunoensaio, sangue total",
            "preparation": "x",
            "price": 102,
            "priceSena": 16.64,
            "fees": 10
          },
                 
        ],
        "medics": [
          
        ]
      },
    ]
    }


// Imprimi os valores dos exames
 const receiveData = data.rows.map(a => {
     return a.exams.map(b => b.price).reduce((i, o) => i + o, 0)       
    })
    console.log(receiveData)
  
//Imprimi todos os valores de todos os exames 
  const receiveAmount = []
  const recebeValue = receiveData.reduce((a, b) => a + b, 0)
  receiveAmount.push(recebeValue)

    console.log(receiveAmount)


// Outra Forma de fazer usando For
const priceOfAllExams = data.rows.map(result => result.exams).map(value => {
  let val = 0

  for(var i in value){
    val += value[i].price  
  }

  return val
 
}).reduce((a, b) => a + b, 0)

console.log('Soma de Todos os Exames: ', 'R$', priceOfAllExams)
 