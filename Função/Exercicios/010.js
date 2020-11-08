/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivil(number) {
    if(number % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivil(0))
console.log(divisivil(7))
console.log(divisivil(3))
console.log(divisivil(6))
console.log(divisivil(20))
