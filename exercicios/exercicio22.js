let saldo = 1000
let saldoSuficiente = true

function saques(valor) {
    if (saldo - valor >= 0) {
        saldo -= valor
        return `Saque realizado com sucesso! Saldo restante: R$${saldo}`
    }else {
        saldoSuficiente = false
        return `Saldo insuficiente para a operação: R$${saldo}`
    }
}

do {
    console.log(saques(150))
} while (saldoSuficiente == true) 