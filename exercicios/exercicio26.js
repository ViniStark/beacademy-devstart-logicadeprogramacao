const arr = []

function matriz(a, b, c){
    let col = [a, b, c]
    arr.push(col)
}

matriz(40, 2, 4)
matriz(65, 77, 45)
matriz(78, 12, 0)

let indexRow = 0
let indexCol = 0
let somaPrincipal = 0
let somaSecundaria = 0

for(indexRow; indexRow < arr.length; indexRow++){
    for(indexCol = 0; indexCol < arr.length; indexCol++){
        if(indexRow == indexCol){
            somaPrincipal += arr[indexRow][indexCol]
        }

        if((indexRow+indexCol) == (arr.length - 1)){
            somaSecundaria += arr[indexRow][indexCol]
        }
    }
}
console.log(arr)
console.log(`Soma diagonal principal = ${somaPrincipal}`)
console.log(`Soma diagonal secundaria = ${somaSecundaria}`)