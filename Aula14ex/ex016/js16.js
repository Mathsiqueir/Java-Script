function contar() {    
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var cont = document.getElementById('contador')
    let res = document.getElementById('res')
    if (pas.value.length == 0 || ini.value.length == 0 || fim.value.length == 0 ) {
        window.alert('[ERRO] O passo não pode ser igual a zero!')
        } else{ 
            res.innerHTML = 'contando:'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pas.value)
        
            for(let c = i;c <=f; c+= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }  else{
        for(let c = i; c >=f; c-= p)
        res.innerHTML -= ` ${c} \u{1F449}`
    }

}


/*for(inicio; teste; incremento){
    bloco() //até for falso ele executará esse bloco
}*/