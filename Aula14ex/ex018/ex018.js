function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){
    window.alert("Digite um número!")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') 
            /*fazer a criação de um elemento*/ 
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //local onde ficará por ID
            c++
        }
    }
}