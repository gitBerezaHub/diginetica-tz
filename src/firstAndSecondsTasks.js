function getArticles () {
  const products = document.getElementsByClassName('_product')
  const articles = []
  for (let i = 0; i < products.length; i++) {
    articles.push(products[i].dataset.productMiniCard)
  }
  console.log(articles)
}
getArticles()

function getCharacteristics () {
  const characteristics = {}
  const parameterNames = document.getElementsByClassName('parameter-name')
  for (let i = 0; i < parameterNames.length; i++) {
    characteristics[`${parameterNames[i].innerText.trim().split('  ')[0]}`] = parameterNames[i].nextElementSibling.innerText.trim().split('  ')[0]
  }
  console.log(characteristics)
}
getCharacteristics()
