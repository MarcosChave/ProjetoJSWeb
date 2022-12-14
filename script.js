const button = document.getElementById('click-button')
const select = document.getElementById('Selecionar-moeda')
/**[0] TagName - converte apenas a primeira posição(elemento específico)*/

/**Função que converte os valores */
const ConvertValues = async () => {
  const inputReal = document.getElementById('Value-Converter').value
  const ValueReal = document.getElementById('Value-Real')
  const ValorConvertido = document.getElementById('Valor-Convertido')
  //consumindo uma API

  const data = await fetch(
    'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
  ).then(response => response.json())
  console.log(data)

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  //ValueReal.innerHTML = inputReal
  ValueReal.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputReal)

  if (select.value === 'US$ Dólar Americano') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputReal / dolar)
  }

  if (select.value === '€ Euro') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputReal / euro)
  }

  if (select.value === '₿ Bitcoin') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-UE', {
      style: 'currency',
      currency: 'BTC'
    }).format(inputReal * bitcoin)
  }
  //ValorConvertido.innerHTML = inputReal / dolar
  /**trás o valor da caixa para a parte do texto */
}
/**funcão que troca as imagens */
ChangeCurrency = () => {
  const NameCurrency = document.getElementById('Name-Currency')
  const CurrencyImg = document.getElementById('Currency-img')
  if (select.value === 'US$ Dólar Americano') {
    NameCurrency.innerHTML = 'Dólar Americano '
    CurrencyImg.src = './estados-unidos (1) 1.png'
  }
  if (select.value === '€ Euro') {
    NameCurrency.innerHTML = 'Euro'
    CurrencyImg.src = './Design sem nome 1.png'
  }

  if (select.value === '₿ Bitcoin') {
    NameCurrency.innerHTML = 'Bitcoin'
    CurrencyImg.src = './bitcoin1.png'
  }

  ConvertValues()
}
button.addEventListener('click', ConvertValues)
select.addEventListener('change', ChangeCurrency)
const Resetar = document.getElementsByClassName('currency-value').reset
/**Adicionou um ouvidor de evento que quando executado chama a função */
