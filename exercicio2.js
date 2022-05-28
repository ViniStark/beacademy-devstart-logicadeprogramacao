function imc(nome, altura, peso){
    //O cálculo do IMC é feito dividindo o peso pelo quadrado da altura
    console.log(`Nome: ${nome} | Altura: ${altura} | Peso: ${peso} | IMC: ${peso / altura**2}`)
}

imc('Vinicius', 1.79, 70)
