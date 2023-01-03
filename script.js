const button = document.getElementById('click-button')
const select = document.getElementById('Selecionar-moeda')
const selectOne = document.getElementById('selectOne')
/**[0] TagName - converte apenas a primeira posição(elemento específico)*/

/**Função que converte os valores */
const ConvertValues = async () => {
  const inputReal = document.getElementById('Value-Converter').value
  const ValueReal = document.getElementById('Value-Real')
  const ValorConvertido = document.getElementById('Valor-Convertido')

  //consumindo uma API
  const data = await fetch(
    ' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,USD-EUR,BTC-EUR'
  ).then(response => response.json())
  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high
  const euroDolar = data.USDEUR.high
  const euroBtc = data.BTCEUR.high

  //ValueReal.innerHTML = inputReal

  if (selectOne.value === 'R$ Real Brasileiro') {
    ValueReal.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(inputReal)
  }

  if (selectOne.value === 'Euro') {
    ValueReal.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputReal)
  }

  if (
    selectOne.value === 'R$ Real Brasileiro' &&
    select.value === 'US$ Dólar Americano'
  ) {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputReal / dolar)
  }

  if (selectOne.value === 'R$ Real Brasileiro' && select.value === '€ Euro') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputReal / euro)
  }

  if (
    selectOne.value === 'R$ Real Brasileiro' &&
    select.value === '₿ Bitcoin'
  ) {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-UE', {
      style: 'currency',
      currency: 'BTC'
    }).format(inputReal * bitcoin)
  }

  if (selectOne.value === 'Euro' && select.value === 'R$ Real Brasileiro') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(euro * inputReal)
  }

  if (selectOne.value === 'Euro' && select.value === '₿ Bitcoin') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC'
    }).format(inputReal * euroBtc)
  }

  if (selectOne.value === 'Euro' && select.value === 'US$ Dólar Americano') {
    ValorConvertido.innerHTML = new Intl.NumberFormat('en-UE', {
      style: 'currency',
      currency: 'USD'
    }).format(inputReal * euroDolar)
  }

  /**trás o valor da caixa para a parte do texto */
}
/**funcão que troca as imagens */
ChangeCurrency = () => {
  const NameCurrency = document.getElementById('Name-Currency')
  const CurrencyImg = document.getElementById('Currency-img')
  const ImgUm = document.getElementById('img-Um')
  const NomeUm = document.getElementById('nome-Um')

  if (selectOne.value === 'R$ Real Brasileiro') {
    ImgUm.src = './brasil 2.png'
    NomeUm.innerHTML = 'Real'
  }
  if (selectOne.value === 'Euro') {
    ImgUm.src = './Design sem nome 1.png'
    NomeUm.innerHTML = 'Euro'
  }

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
  if (select.value === 'R$ Real Brasileiro') {
    NameCurrency.innerHTML = 'Real'
    CurrencyImg.src = './brasil 2.png'
  }

  ConvertValues()
}
button.addEventListener('click', ConvertValues)
select.addEventListener('change', ChangeCurrency)
selectOne.addEventListener('change', ChangeCurrency)
const Resetar = document.getElementsByClassName('currency-value').reset
/**Adicionou um ouvidor de evento que quando executado chama a função */
