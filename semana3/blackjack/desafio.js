/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let Usuario = [];
let Computador = [];
let UsTxt = []
let CpTxt = []
let somaUs = 0
let somaCp = 0
console.log('Bem vindo ao jogo de Blackjack!');
if (confirm('Deseja iniciar uma nova rodada?')) {
   for (i = 0; i < 2; i++) {
      Usuario[i] = comprarCarta()
      UsTxt += Usuario[i].texto
      somaUs += Usuario[i].valor
   }
   for (a = 0; a < 1; a++) {
      Computador[a] = comprarCarta()
      somaCp += Computador[a].valor
      CpTxt += Computador[a].texto
   }
   while (somaUs < 21) {
      if (confirm(`Suas cartas são ${UsTxt}. A carta revelada do Computador é ${Computador[0].texto}.\n Deseja comprar mais uma carta? `)) {
         Usuario[Usuario.length - 1] = comprarCarta()
         UsTxt += Usuario[Usuario.length - 1].texto
         somaUs += Usuario[Usuario.length - 1].valor
         while (somaCp < 21) {
            Computador[a] = comprarCarta()
            somaCp += Computador[a].valor
            CpTxt += Computador[a].texto
         }
      } else {
         while (somaCp < 21) {
            Computador[a] = comprarCarta()
            somaCp += Computador[a].valor
            CpTxt += Computador[a].texto
         }
         if (somaUs > 21 || somaCp === 21 || (21 - somaUs) < (21 - somaCp)) {
            alert(`Sua pontuação foi ${somaUs} e a do computador foi ${somaCp}. \n O Computador Ganhou!`)         
         } else if (somaCp > 21 || somaUs === 21 || (21 - somaUs) > (21 - somaCp)) {
            alert(`Sua pontuação foi ${somaUs} e a do computador foi ${somaCp}. \n O Usuario Ganhou!`)        
         }else
         console.log(21 - somaUs)
         console.log(21 - somaCp);
      }
      if (somaUs > 21 || somaCp === 21 || (21 - somaUs) < (21 - somaCp)) {
         alert(`Sua pontuação foi ${somaUs} e a do computador foi ${somaCp}. \n O Computador Ganhou!`)         
      } else if (somaCp > 21 || somaUs === 21 || (21 - somaUs) > (21 - somaCp)) {
         alert(`Sua pontuação foi ${somaUs} e a do computador foi ${somaCp}. \n O Usuario Ganhou!`)        
      }
   }
   

} else {
   console.log("O jogo Acabou!");
}