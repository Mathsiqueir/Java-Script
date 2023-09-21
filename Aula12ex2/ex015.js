function verificar(){ //ao clicar em verificar será redirecionado para essa function
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){//se o valor for igual a 0 ou valor ser maior que o ano
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = 'ano'
        var img = document.createElement('img') //criador de elementos 
        img.setAttribute('id', 'foto')
        //res.innerHTML = `idade calculada: ${idade}` validação
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', './imagens/foto-bebe-m.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-m.jpg')
            } else if (idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-m.jpg')
            } else if (idade >= 60 && idade < 120){
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', './imagens/foto-bebe-f.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-f.jpg')
            } else if (idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-f.jpg')
            } else if (idade >= 60 && idade < 120){
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img) //adicionar um elemento
    }
}   