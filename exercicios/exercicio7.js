let saldo = 200

function operacaoBancaria(operacao, valor){
    //Operação 1: depósito, operação 2: saque

    if(operacao == 1){
        saldo += valor
        return `Operação: Depósito | Valor inicial: ${saldo - valor} | Valor atual: ${saldo}`
    }else if(operacao == 2){
        saldo -= valor
        return `Operação: Saque | Valor inicial: ${saldo + valor} | Valor atual: ${saldo}`
    }else{
        return `Operação inválida!`
    }
}

console.log(operacaoBancaria(1, 400))
console.log(operacaoBancaria(2, 400))
console.log(operacaoBancaria(5, 400))