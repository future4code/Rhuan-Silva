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

 console.log('Bem vindo ao jogo de Blackjack!');
 if (confirm('Deseja iniciar uma nova rodada?')){
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta1pc = comprarCarta()
   const carta2pc = comprarCarta()
   const c1t= carta1.texto
   const c1v= carta1.valor
   const c2t= carta2.texto
   const c2v= carta2.valor
   const resus=c1v+c2v
   console.log(`Usuario - Cartas ${c1t} ${c2t}- Pontuação ${resus}`);  
   const c1pt= carta1pc.texto
   const c1pv= carta1pc.valor
   const c2pt= carta2pc.texto
   const c2pv= carta2pc.valor
   const respc = c1pv + c2pv
   console.log(`Computador - Cartas ${c1pt} ${c2pt}- Pontuação ${respc}`);
      if(resus>respc){
         console.log("O Usuário ganhou!");         
      }else if (resus===respc){
         console.log('Empate!');         
      }else{
         console.log("Computador Ganhou!");         
      }
 }else{
    console.log('O jogo acabou!');    
 }
 
 