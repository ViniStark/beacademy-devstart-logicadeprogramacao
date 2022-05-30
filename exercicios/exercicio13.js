function multiplosDeTres(n1, n2){
    if(n1 > n2) [n1, n2] = [n2, n1]
    
    for(n1; n1 <= n2; n1++){
        if(n1 % 3 == 0){
            console.log(n1)
        }
    }
}

multiplosDeTres(18, 49)
multiplosDeTres(70, 60)