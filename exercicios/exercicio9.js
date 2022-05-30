function figuraGeometrica(figura, lado){
    //Operações válidas apenas para figuras que possuem todos os lados iguais

    switch(figura){
        case 'Q':
            console.log(`Perímetro: ${lado * 4} | Área: ${lado**2}`)
            break
        case 'T':
            console.log(`Perímetro: ${lado * 3} | Área: ${(lado**2 * Math.sqrt(3)) / 4}`)
            break
        default:
            console.log('Figura inválida!')
    }
}

figuraGeometrica('T', 5)
figuraGeometrica('Q', 5)