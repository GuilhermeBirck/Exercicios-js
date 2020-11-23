/*17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
        de acordo com a tabela abaixo: PlanoAumento A-10%, B-15%, C-20%, Faça uma função que leia o 
        plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.
        Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
    


function increase(planJob, salary) {
    switch(planJob) {
        case 'A' :
            return `Plano ${planJob} = 10%, aumento = ${salary * 1.10}`
        case 'B' :
            return `Plano ${planJob} = 15%, aumento = ${salary * 1.15}`
        case 'C' :
            return `Plano ${planJob} = 20%, aumento = ${salary * 1.20}`
        default :
            return 'Plano é inválido.'
    }
}

console.log(increase('A', 3000))
console.log(increase('B', 3000))
console.log(increase('C', 3000))
console.log(increase('AAA', 3000))
