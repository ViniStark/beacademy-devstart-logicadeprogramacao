function transferencia(banco, agencia, conta) {
    return `Banco: ${banco} | Agência: ${agencia} | Conta: ${conta}`
}

let saldo = 9800

function operacaoBancaria(quantasOperacoes, operacoes = [], valores = []) {
    for (let n = 1; n <= quantasOperacoes; n++) {
        switch (operacoes[n - 1]) {
            case 'D':
                saldo += valores[n-1]
                console.log(`Operação: Depósito | Valor inicial: ${saldo - valores[n-1]} | Valor atual: ${saldo}`)
                break
            case 'S':
                saldo -= valores[n-1]
                console.log(`Operação: Saque | Valor inicial: ${saldo + valores[n-1]} | Valor atual: ${saldo}`)
                break
            case 'T':
                saldo -= valores[n-1]
                let dadosBancarios = transferencia('Itaú', '00', '0000-00')
                console.log(`Operação: Transferência | Valor: ${valores[n-1]} | Saldo inicial: ${saldo + valores[n-1]} | Saldo atual: ${saldo} | Dados bancários: [${dadosBancarios}]`)
                break
            default:
                console.log('Operação inválida!')
        }
    }
}

operacaoBancaria(3, ['T', 'D', 'S'], [800, 299, 985])