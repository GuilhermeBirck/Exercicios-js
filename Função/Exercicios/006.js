/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function  simpleInterest(capital, rate, timeApplying) {
    return `\nMontante: R$ ${capital + (capital * rate * timeApplying)}`
}

function compoundInterest(capital, rate, timeApplying) {
    return `${capital * (1 + rate)**timeApplying}`
}

console.log(simpleInterest(100, 10/100, 2))
console.log(compoundInterest(100, 10/100, 2))