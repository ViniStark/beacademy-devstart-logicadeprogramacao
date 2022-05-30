const clientes = []

function novoCliente(nome, cpf, rg, endereco, telefone){
    let dados = {nome, cpf, rg, endereco, telefone}
    clientes.push(dados)
}

novoCliente('Vinicius', '000.000.000-00', '111.111.111-1', 'Rua D', '(22) 9 2222-2222')

console.log(clientes[0])
