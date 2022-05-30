let login = [
    {nome: 'Vinicius', senha: '1234'},
    {nome: 'Vini', senha: '12345'},
    {nome: 'vinicius', senha: '1234'},
    {nome: 'Vinicius', senha: '4321'}
]

function sistema(nome, senha){
    do{
        return 'Digite os seus dados cadastrais:'
    } while(nome != 'Vinicius' && senha != '4321')
}

login.forEach(i => console.log(sistema(i.nome, i.senha)))