console.log("Vamos Jogar!");
const n1 = prompt("Escolha um numero!")
let n2 = prompt('Chute um numero!')
let contador = 0
while (n2 !== n1) {    
    if(n2>n1){
        console.log("ERRROU, menos!");
    } 
    if (n2<n1){
        console.log('ERRROU,mais!')
    }   
    contador++
    console.log(`Numero chutado foi: ${n2}`);
    n2=prompt('Tente de novo')
}
console.log(`Acertou!`)
console.log(`Numero de tentativas: ${contador}!`)