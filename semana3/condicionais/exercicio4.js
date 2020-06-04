let num1 = prompt('Digite um numero!')
let num2 = prompt('Digite outro numero!')
const n1 = Number(num1)
const n2 = Number(num2)

if(num1>num2){
    document.write(`${n1} > ${n2}`);    
}else{
    document.write(`${n2} > ${n1}`);    
}
//Imprimiu '2>2'
