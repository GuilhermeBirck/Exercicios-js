/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia.
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/


function dia(numero) {
    switch(numero) {
        case 1:
            console.log("Domingo")
            //console.log("Fim de semana")
            break
        case 2:
            console.log("Segunda-Feira")
            break
        case 3:
            console.log("Terça-Feira")
            break
        case 4:
            console.log("Quarta-Feira")
            break
        case 5:
            console.log("Quinta-Feira")
            break
        case 6:
            console.log("Sexta-Feira")
            break
        case 7:
            console.log("Sábado")
            //console.log("Fim de semana")
            break
        //case 2: case 3: case 4: case 5: case 6:
            //console.log("Dia útil")
        default:
            console.log("Dia Inválido")
    }
}


dia(1)
dia(8)

