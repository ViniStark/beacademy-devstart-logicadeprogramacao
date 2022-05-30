function transferencia(banco, agencia, conta){
    return `Banco: ${banco} | Agência: ${agencia} | Conta: ${conta}`
}

let saldo = 9800

function operacaoBancaria(operacao, valor) {
    switch (operacao) {
        case 'D':
            saldo += valor
            return `Operação: Depósito | Valor inicial: ${saldo - valor} | Valor atual: ${saldo}`
        case 'S':
            saldo -= valor
            return `Operação: Saque | Valor inicial: ${saldo + valor} | Valor atual: ${saldo}`
        case 'T':
            saldo -= valor
            let dadosBancarios = transferencia('Itaú', '00', '0000-00')
            return `Operação: Transferência | Valor: ${valor} | Saldo inicial: ${saldo + valor} | Saldo atual: ${saldo} | Dados bancários: [${dadosBancarios}]`
        default:
            return 'Operação inválida!'
    }
}

console.log(operacaoBancaria('S', 800))