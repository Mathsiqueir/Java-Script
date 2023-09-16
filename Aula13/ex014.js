function carregar(){  
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date() //cria um objeto do tipo date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#b9844f'      
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#313134'
    }
}