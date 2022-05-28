function idade(nome, idade){
    return `
        Seu nome é ${nome} e sua idade é ${idade}.
        Idade maior que 18: ${idade > 18}
        Falso se a idade diferente de 25: ${idade == 25}
        Falso se a idade diferente de 25 e nome igual a Marcos: ${idade == 25 && nome != 'Marcos'}
        Verdadeiro se a idade diferente de 25 ou nome igual a Marcos: ${idade != 25 || nome == 'Marcos'}
        Idade divida por 2 é igual a zero: ${(idade % 2) == 0}
    `
}

console.log(idade('Marcos', 26))