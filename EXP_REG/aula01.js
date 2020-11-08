// g - global (encontra todas as ocorrências)
// i - insensitive
// (()()) - grupos
// | - OU

const { texto } = require('./base')
const regExp1 = /(maria)(, hoje sua esposa)/i

console.log(regExp1.test(texto))
const found = regExp1.exec(texto)

console.log(found[0])
console.log(found[1])
console.log(found[2])