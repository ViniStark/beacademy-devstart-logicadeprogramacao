let produto = []
let preco = []

function produtos(nome, valor){
    produto.push(nome)
    preco.push(valor)
}

produtos('Celular', 2000)
produtos('Notebook', 4000)
produtos('Teclado', 100)
produtos('Mouse', 80)

console.log(produto, preco)