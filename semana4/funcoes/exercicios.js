// EXERCÍCIO 1
// Leia o código abaixo:
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }
// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
// []

// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
// [0, 1, 0, 1, 2, 3]

// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
// [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// EXERCICIO 2
// Leia o código abaixo:


// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));


// a. Explicite quais são as saídas impressas no console
// se lista indice for === nome retorna o indice..como não tem paulinha o valor é indefinido
// 0
// 2
// undefined

// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
// Funcionaria, ele iria testar se o numero esta na lista e mostraria a posição da mesma forma!

// EXERCICIO 3
// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!


// function metodo(array) {
//   let resultadoA = 0;
//   let resultadoB = 1;
//   let arrayFinal = [];

//   for (let x of array) {
//     resultadoA += x;
//     resultadoB *= x;
//   }

//   arrayFinal.push(resultadoA);
//   arrayFinal.push(resultadoB);
//   return arrayFinal;
// }

// Ele pega todos os valores e soma no resultadoA e ao resultadoB ele multiplica rodos os valores e adiciona a variavel depois joga esse valores para o arrayFinal e retorna eles.
// nome melhor seria somaEmultiplicaTudo.

// EXERCICIO4
// a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro:

// let idadeDog = (hum, dog) => {
//     dog = 7*hum
//     return dog
// }

// b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// let dadosPessoais = (nome, idade, endereco, estudante) =>{
//     if(estudante == 0){
//         estudante = 'Sou';
//     }else if (estudante == 1){
//         estudante = 'Não sou';
//     }
    
//     idade = Number(idade)
//     return `Eu sou ${nome},tenho ${idade} anos, moro em ${endereco} e ${estudante}`
// }

// const frase = dadosPessoais ('Rhuan', 24, 'Rua Turmalina 250', 1)
// console.log(frase);

EXERCICIO 5
O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, considere as seguintes afirmações:

1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode implementar para um intervalo maior)
2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]`
    - Algarismos Romanos
3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor
