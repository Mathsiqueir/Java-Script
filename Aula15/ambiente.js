let num = [5, 8, 2, 9, 3]
num[3] = 7 //cria um elemento onde foi solicitado
num.push(9) //cria um elemento no final do índice
num.length //é um atributo

console.log(`Nosso vetor é o ${num}`);
console.log(`Nosso índice tem ${num.length} valores`);
console.log(`O primeiro valor do nosso vetor é ${num[0]}`);
num.sort() // coloca os elementos em ordem crescente
console.log(`vamos ordenar o vetor ${num.sort()}`);