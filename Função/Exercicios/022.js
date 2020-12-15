/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
       A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade.
       A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos).
       O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/


/*Formula juros composto
 M = C*(1 + i )^t
 t = time/meses
 M = amount
 C = capital
 i = rate
*/

function annuity(month, value) {
    if(month >= 1 && month < 13) {
        return value = (value *((1 + (5/100))**(month-1))).toFixed(2)
    } else {
        return "Mês inválido"
    }
    
}

console.log(annuity(0,100))
console.log(annuity(1,100))
console.log(annuity(2,100))
console.log(annuity(3,100))
console.log(annuity(4,100))
console.log(annuity(5,100))
console.log(annuity(6,100))
console.log(annuity(7,100))
console.log(annuity(8,100))
console.log(annuity(9,100))
console.log(annuity(10,100))
console.log(annuity(11,100))
console.log(annuity(12,100))
console.log(annuity(13,100))
