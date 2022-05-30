function classificacaoEtaria(idade){
    if(idade < 18){
        console.log('Menor de idade')
    }else if(idade >= 18 && idade < 60){
        console.log('Adulto')
    }else{
        console.log('Idoso')
    }
}

classificacaoEtaria(15)
classificacaoEtaria(19)
classificacaoEtaria(100)