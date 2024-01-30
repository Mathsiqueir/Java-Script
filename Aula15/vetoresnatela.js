let vetores = [8,1,7,4,2,9]
let i = 0
// vetores.forEach(num => {
//     console.log(`a posição${i} tem o valor ${num}`)
//     i++
// });

for(let i in vetores){
    console.log(`a posição ${i} tem o valor ${vetores[i]}`)
    
}
console.log(vetores.indexOf(4))