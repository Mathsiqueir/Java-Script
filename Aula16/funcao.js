


document.getElementById('enviarNum').addEventListener('click', function() {
    let num = document.getElementById('num').value
    console.log(num)
    if (num % 2 == 0) {
        console.log(`o número ${num} é par`)
    } else {
        console.log(`o número ${num} é ímpar`)
    }
})

