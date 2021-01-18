/*Escreva um algoritmo que leia o código de um aluno e suas três notas. 
  Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes 3.
  Mostre o código doaluno, suas três notas, a média calculada e uma mensagem "APROVADO"
  se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5.
  Repita a operação até que o código lido seja negativo.
*/

function media(code, grade, grade2, grade3) {
    let grades = [grade, grade2, grade3]
    //Ordenando o Array,
    grades.sort((a,b) => a < b ? 1 : -1)

    //Calculando média ponterada
    let grades2 = [grades[0]*4, grades[1]*3, grades[2]*3]
    console.log(grades2)
    let media = grades2.reduce((media, grades2) => media + grades2, 0)
    console.log(`Codigo do aluno ${code} , Média: ${media/10}`)
}

media(20323, 2.8, 6, 3.5)