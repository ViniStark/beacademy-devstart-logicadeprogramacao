const idades = [
    12,
    15,
    9,
    29,
    33,
    22,
    67,
    72,
    '-99',
    81
]

let menores = 0
let idosos = 0

function quantasIdades(idade) {
    if (idade < 18) menores++
    if (idade > 60) idosos++
}

let index = 0

do {
    quantasIdades(idades[index])
    index++
} while (idades[index] != '-99')

console.log(`Menores: ${menores} | Idosos: ${idosos}`)