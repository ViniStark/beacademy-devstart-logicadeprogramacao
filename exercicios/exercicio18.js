function transferencia(banco, agencia, conta) {
    return `Banco: ${banco} | Agência: ${agencia} | Conta: ${conta}`
}

let saldo = 9800

function operacaoBancaria(quantasOperacoes, operacoes = [], valores = []) {
    let n = 0
    while (n < quantasOperacoes) {
        n++
        switch (operacoes[n - 1]) {
            case 'D':
                saldo += valores[n - 1]
                console.log(`Operação: Depósito | Valor inicial: ${saldo - valores[n - 1]} | Valor atual: ${saldo}`)
                break
            case 'S':
                saldo -= valores[n - 1]
                console.log(`Operação: Saque | Valor inicial: ${saldo + valores[n - 1]} | Valor atual: ${saldo}`)
                break
            case 'T':
                saldo -= valores[n - 1]
                let dadosBancarios = transferencia('Itaú', '00', '0000-00')
                console.log(`Operação: Transferência | Valor: ${valores[n - 1]} | Saldo inicial: ${saldo + valores[n - 1]} | Saldo atual: ${saldo} | Dados bancários: [${dadosBancarios}]`)
                break
            case 'E':
                let [juros, parcelas] = [30, 5]
                console.log(`Operação: Empréstimo | Valor: ${valores[n - 1]} | Taxa de juros: ${juros}% | Parcelas: ${parcelas} vezes de R$${(valores[n - 1] + (valores[n - 1] * juros / 100)) / parcelas}`)
                break
            default:
                console.log('Operação inválida!')
        }
    }
}

operacaoBancaria(4, ['T', 'D', 'S', 'E'], [800, 299, 985, 2000])