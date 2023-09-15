function carregar(){  
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date() //cria um objeto do tipo date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = '/imagens/manha.jpg'
    }else if(hora > 12 && hora < 18){
        //BOA TARDE
        img.src ='imagens/tarde.jpg'
    } else{
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
    }
} 