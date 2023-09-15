var idade = 17
if (idade < 16){
    console.log('Não vota') //condição simples, não precisa de else ou outra condição para ser executada
}else{
    if ( idade >= 16 && idade < 18 || idade > 65){
        console.log ('Voto opcional')//se a primeira for verdadeira e a segunda falsa então executa o
    } else{
        console.log("voto obrigatório")
    }
}