let seg = document.querySelector('td#seg')
let ter = document.querySelector('td#ter')
let qua = document.querySelector('td#qua')
let qui = document.querySelector('td#qui')
let sex = document.querySelector('td#sex')
let sab = document.querySelector('td#sab')
let dom = document.querySelector('td#dom')


let addTarefa = (dia) =>{
    tarefa = prompt('Adicione uma tafera!');
    dia.innerHTML += `<p> ${tarefa}</p>`
    
} 
