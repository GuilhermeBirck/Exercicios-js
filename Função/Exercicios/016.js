/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe como parâmetros
 dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos.
 Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.
 Crie um caso default para operações inválidas.*/


 function calculadora (value1, operation, value2 ) {
    switch(operation) {
        case '+' :
            console.log(`Soma ${value1} + ${value2} = ${value1 + value2} `)
            break
        case '-' :
            console.log(`Soma ${value1} - ${value2} = ${value1 - value2} `)
            break
        case '*' :
            console.log(`Soma ${value1} * ${value2} = ${value1 * value2} `)
            break
        case '/' :
            console.log(`Soma ${value1} / ${value2} = ${value1 / value2} `)
            break
        default :
            console.log('Operação inválida')
    }
 }

 calculadora(2,'+',3)
 calculadora(2,'-',3)
 calculadora(2,'*',3)
 calculadora(2,'/',3)
 calculadora(2,'///',3)