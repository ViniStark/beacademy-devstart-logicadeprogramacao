function classificacaoImc(altura, peso){
    let imc = peso / altura**2

    if(imc < 19){
        return 'Abaixo do peso'
    }else if(imc >= 19 && imc < 25){
        return 'Peso normal'
    }else if(imc >= 25 && imc < 30){
        return 'Sobrepeso'
    }else if (imc >= 30 && imc < 40){
        return 'Obesidade Tipo I'
    }else{
        return 'Obesidade Mórbida'
    }
}

console.log(classificacaoImc(1.79, 80))