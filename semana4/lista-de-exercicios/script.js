// Exercícios de interpretação de código

// // 1. A função recebe o valor em dolar de entrada, o valor da cotação do dia e multiplica o valor de entrada pela cotação, e retorna o valor em reais na variavel meuDinheiro
// // o console vai imprimir : R$ 100*contacao

// // 2. A função recebe um valor de entrada e um tipo de investimento, testa qual tipo de investivemento foi escolhido e retorna o valor apos o investimento. 
// // o console vai imprimir na primeira linha 165
// // o console vai imprimir na segunda linha nada, vai informar 'TIPO DE INVESTIMENTO INFORMADO INCORRETO!'

// // 3. Esta testando quais numeros do array numeros é par e jogando para o array1 e os impares joga para o array2
// // Depois vai exibir no console o tamanho do array inicial e dos outros 2 novos arrays.

// // o console vai imprimir na primeira linha 14
// // o console vai imprimir na segunda linha 6
// // o console vai imprimir na terceira linha 8

// // 4. O código está testando qual é o menor e qual o maior numero do array e salvando dentro das variaveis respectivamente. 

// // o console vai imprimir na primeira linha -10
// // o console vai imprimir na segunda linha 1590

// Exercícios de Lógica de Programação

// // 1. while, for(inicio;condicao;atribuicao), for(let indice of array)
// // for (i = 0; i <= 10; i++){
// //     console.log(i);    
// // }

// // 2. 
// // a) false
// // b) true 
// // c) true
// // d) true
// // e) false  

// 3. O codigo não funciona pois está incompleto.

// const quantidadeDeNumerosPares = 5
// for(i = 0;i < quantidadeDeNumerosPares*2; i++) {
//     if(i%2===0){
//         console.log(i)
//     }
// }

// 4.

// const tamanhoLados = (a, b, c) => {
//     let triangulo;
//     if (a === b && a === c){
//         triangulo = "Equilatero"
//     }else if(a === b || a === c){
//         triangulo = "Isósceles"
//     }else if (a !== b && a !== c){
//         triangulo = "Escaleno"
//     }

//     return triangulo;
// }

// const trianguloTipo = tamanhoLados(4,5,2);
// console.log(trianguloTipo);

// 5.
// let maior;
// let menor;
// const doisNumeros = (n1,n2) =>{
//     if (n1>n2){
//         maior=n1
//         menor=n2
//     }else{
//         maior=n2
//         menor=n1
//     }

//     console.log(`O maior é ${maior}`);

//     if(n1%n2===0){
//         console.log(`${n1} é divisivel por ${n2}`);
//     }else{
//         console.log(`${n1} Não é divisivel por ${n2}`)
//     }

//     if(n2%n1===0){
//         console.log(`${n2} é divisivel por ${n1}`);
//     }else{
//         console.log(`${n2} Não é divisivel por ${n1}`)
//     }

//     let diferenca = maior - menor;
//     console.log(`A diferença entre os dois é ${diferenca}`);


// }

// const maiorNumero = doisNumeros(25,21)

// Exercicios de funções.

// 1. 

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2.

// const ola = () =>{
//     return alert('Hello Future4')
// }

// ola()

//Exercicios de Objetos.

// 1.Um array é como se fosse um estacionamento com varias vagas, e essas vagas são marcadas por indices, que começão do 0 e vão ate onde você precisar. Já uma variavel que contem mais de uma propriedade dentro dela, que podem ser acessadas quando necessario.

// 2.

// let criaRetangulo = (lado1, lado2) => {
//     let largura = lado1;
//     let altura = lado2
//     let perimetro = (2 * (lado1 + lado2));
//     let area = (lado1 * lado2);

//     return retangulo = {
//         largura,
//         altura,
//         perimetro,
//         area
//     }
// }

// 3.

// const filme = {
//     nome: 'Aladdin ',
//     ano: 2019,
//     diretor:'Guy Ritchie',
//     atores: ['Mena Massoud','Naomi Scott','Will Smith']
// }

// console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`);

// 4.
// const pessoa = {
//     nome: 'Rhuan',
//     idade: 24,
//     email: 'rhuancarlos.silva12@gmail.com',
//     endereco: 'Turmalina,250'
// }

// function anonimizarPessoas() {
//     const anonimo = {
//         ...pessoa,
//         nome: 'ANONIMO',   
//     }
//     console.log(anonimo);
// }

// anonimizarPessoas()

// Exercicios Array


// 1.// arrayBase = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// a)const maiores = arrayBase.filter((hum,i,a)=>{
//     return hum.idade>=20
// })



// b) 
// const menores = arrayBase.filter((hum,i,a)=>{
//         return hum.idade<20
//     })
    


// 2.

// const array = [1, 2, 3, 4, 5, 6]

// // a)

// array.forEach((n,i,a)=>{
//     a[i] = n*2
// })

// b)
// array.forEach((n,i,a)=>{
//     a[i] = n*3
//     a[i].toString
// })

// c)
// array.forEach ((numero,item,arr)=>{
//     if(numero%2===0){
//         arr[item] = `${numero} é par!`
//     }else{
//         arr[item] = `${numero} é impar!`
//     }
// })



