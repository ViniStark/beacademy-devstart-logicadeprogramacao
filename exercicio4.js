let saldo = 3000

function calculoSaldo(deposito){
    saldo += deposito

    console.log(`Saldo inicial: ${saldo - deposito} | Depósito: ${deposito} | Saldo atual: ${saldo}`)
}

calculoSaldo(500)