let isAtivo = false
console.log(isAtivo)


isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

//  Os Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!"Test")
//Os Falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// 

console.log(!!('' || null || 0 || "TEST"))

let nome ='TESTE'
console.log(nome || 'Desconhecido')
