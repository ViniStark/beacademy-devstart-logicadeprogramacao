const aluno = []
const notas = []

function aprovacao(nome, nota1, nota2){
    aluno.push(nome)
    notas.push(nota1, nota2)
    let media = (nota1 + nota2) / 2
    
    if(media >= 6){
        return `Aluno: ${nome} | Primeira nota: ${nota1}, Segunda nota: ${nota2} | Média: ${media} | Aprovado!`
    }else{
        return `Aluno: ${nome} | Primeira nota: ${nota1}, Segunda nota: ${nota2} | Média: ${media} | Reprovado!`
    }
}

console.log(aprovacao('Vinicius', 6, 9))