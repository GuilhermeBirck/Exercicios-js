/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function  verifyGrade(grade) {
    if (grade < 38) {
        console.log(`Reprovado com nota ${grade}`)
    } else {
        if (grade % 5 > 2) {
            grade = grade + (5 - grade % 5)
        }
        console.log(`Aprovado com nota ${grade}`)
    }
}

verifyGrade(30)
verifyGrade(42)
verifyGrade(38)
verifyGrade(53)
verifyGrade(100)
verifyGrade(99)


// nota < 40 -> reprovado
// se a nota for acima de 40 posso arredondar exemplo : 43 > 45 e 84 > 85