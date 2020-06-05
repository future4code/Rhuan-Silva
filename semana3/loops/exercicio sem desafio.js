// EXE1
// O que o código abaixo está fazendo? Qual o resultado impresso no console? 
// Esta somando numeros na variavel e vai mostrar o valor da soma de 15 numeros de 0 a 14.

// EXERCÍCIO 2
// Leia o código abaixo:
// a. O que o comando .push faz?
// - Adiciona um elemento ao array

// b. Qual o valor impresso no console?
// - 10,15,25,30

// c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
// valor3: [12,15,18,21,27,30]
// valor4: [12]

// EXERCÍCIO 3
// Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// a. Escreva um programa que devolva o maior e o menor números contidos no array original.
// let const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNumeroAtual = 0
// let menorNumeroAtual = 9999

// for (let i = 0; i < numeros.length; i++) {
//     const elemento = numeros[i]
//     if (elemento > maiorNumeroAtual) {
//         maiorNumeroAtual = elemento
//     }
//     if (elemento < menorNumeroAtual){
//         menorNumeroAtual = elemento
//     }
// }

// console.log(maiorNumeroAtual)
// console.log(menorNumeroAtual)

// a. Escreva um programa que devolva o maior e o menor números contidos no array original.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// const numero = 10

// for(let i = 0 ; i < 13 ; i+=1 ) {
//     item = array[i]/10
//     novoArray.push(item)
        
// }
// console.log(novoArray);

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const novoArray = []
// const numero=2
// for(const item of array) {
//   if(item%numero === 0) {
//     novoArray.push(item)
//   }
// }
// console.log(novoArray)

// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (i=0;i<array.length;i++){
//     console.log(`O elemento do index ${i} é ${array[i]}`);    
// }


