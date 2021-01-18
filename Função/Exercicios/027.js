/*27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais
  de duas crianças e calcule se existe uma criança menor,
  caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá.
  Utilize centímetros para as unidades de medida.
*/


function calcCrescimento(height, rate, height2, rate2) {
    if (height > height2) {
        if (rate >= rate2) {
            return `A segunda criança não vai passar a primeira criança.`
        } else {
           return  tempoCrescimento(height, rate, height2, rate2)
        }
    }
}


function tempoCrescimento(height, rate, height2, rate2) {
    let quantAnos = 0
    while (height < height2) {
        height += rate
        height2 += rate2 
        quantAnos++
    }
    return quantAnos
}

console.log(calcCrescimento(120, 2, 100, 3))
console.log(calcCrescimento(150, 2, 130, 4))