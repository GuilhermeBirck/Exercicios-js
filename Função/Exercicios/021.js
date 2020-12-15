/* 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando
   que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
   1) crianças com menos de 10 anos pagam R$80;
   2) conveniados com idade entre 10 e 30 anos pagam R$50;
   3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95;
   4) conveniados acima de 60 anos pagam R$130; 
*/

function healthPlan(age) {
    if(age < 10) {
        return 180;
    } else if (age <= 30) {
        return 150;
    } else if (age <= 60) {
        return 195;
    } else {    
        return 230;
    }
}

console.log(HealthPlan(9))
console.log(HealthPlan(10))
console.log(HealthPlan(30))
console.log(HealthPlan(25))
console.log(HealthPlan(31))
console.log(HealthPlan(60))
console.log(HealthPlan(61))



