/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo 
    de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
    Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, 
    o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 
    1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function calculateValue(value) {
    var vetValue = [0,0,0,0,0]
    let realValue = returnValue(value)
    while(realValue > 0) {
        switch(realValue) {
            case 100:
                value -= 100
                vetValue[0]++
                break
            case 50:
                value -= 50
                vetValue[1]++
                break
            case 10:
                value -= 10
                vetValue[2]++
                break
            case 5:
                value -= 5
                vetValue[3]++
                break
            case 1:
                value -= 1
                vetValue[4]++
                break
        }
        realValue = returnValue(value)
    }
    return(result(vetValue))
}

function returnValue(value) {
    if(value >= 100) {
        return 100
    } else if (value >= 50) {
        return 50
    } else if (value >= 10) {
        return 10
    } else if (value >= 5) {
        return 5
    } else if (value >= 1) {
        return 1
    }
}

function result(vector) {
    let resultado = ""

    if (vector[0] > 0) {
        resultado += ` ${vector[0]} notas de R$ 100.`       
    }if (vector[1] > 0) {
        resultado += ` ${vector[1]} notas de R$ 50.`       
    }if (vector[2] > 0) {
        resultado += ` ${vector[2]} notas de R$ 10.`       
    }if (vector[3] > 0) {
        resultado += ` ${vector[3]} notas de R$ 5.`       
    }if (vector[4] > 0) {
        resultado += ` ${vector[4]} notas de R$ 1.`
    }
    return resultado
}
console.log(calculateValue(153))

