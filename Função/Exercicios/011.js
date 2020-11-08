/*
 As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false
*/

function calAnoBissexto(year) {
    if (year <= 0){
        return false
    } else if (year % 400 == 0) {
        return true
    } else if (year % 100 == 0) {
        return false
    }else if (year % 4 == 0) {
        return true
    } else {
        return false
    }
    
}
//Não gostei do modo que foi feito o exercicio MELHORAR a Resposta para esse exercicio pois a resolução do mesmo não me agradou.
console.log(calAnoBissexto(0))
console.log(calAnoBissexto(4))
console.log(calAnoBissexto(100))
console.log(calAnoBissexto(400))
console.log(calAnoBissexto(800))
console.log(calAnoBissexto(2020))
console.log(calAnoBissexto(2021))
