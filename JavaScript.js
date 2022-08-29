const button = document.getElementById('click-button')
const select = document.getElementById('Selecionar-moeda')
/**[0] TagName - converte apenas a primeira posição(elemento específico)*/
const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000091
/**Função que converte os valores */
const ConvertValues = () => {
  const inputReal = document.getElementById('Value-Converter').value
  const ValueReal = document.getElementById('Value-Real')
  const ValorConvertido = document.getElementById('Valor-Convertido')
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
