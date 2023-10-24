function contar() {    
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var cont = document.getElementById('contador')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = "impossivel contar"
        window.alert("[ERRO]FALTAM DADOS!")
    } else{
       res.innerHTML = 'Contando...'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(pas.value)
       
       if(i < f){
        //contagem crescente
        for(let c=1 ; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
       } else{
        //contagem regressiva
        for(let c= i; c >=f; c-= p)
            res.innerHTML += `${c} \u{1F449}`
       }
    }res.innerHTML += `\u{1f3c1}`

}


/*for(inicio; teste; incremento){
    bloco() //até for falso ele executará esse bloco
}*/