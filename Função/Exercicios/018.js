/*18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch.
        Crie um case default que escreva ‘Número fora do intervalo.’*/


function extensive (number) {
    switch(number) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default :
            return `Número fora do intervalo.`
    }

}

extensive(0)
extensive(1)
extensive(2)
extensive(3)
extensive(4)
extensive(5)
extensive(6)
extensive(7)
extensive(8)
extensive(9)
extensive(10)
extensive(11)