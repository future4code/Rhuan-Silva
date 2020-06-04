let a = []
let num1 = prompt('Digite um numero!')
a.push(num1)
let num2 = prompt('Digite outro numero!')
a.push(num2)
let num3 = prompt('Digite outro numero!')
a.push(num3)
a.sort()

while (a[0] < 2) {
    document.write(a)
    i++
}