// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(2,3)
imprimirSoma(2) // No JS pode-se passar so um valor ou mais para função retornando um NaN


// Funcao com retorno

function soma(a, b = 4) {
    return a + b
}

console.log(soma(2, 3)) //
console.log(soma(2)) // Se eu passar so um valor como to passando pra Aa ele soma com o 4