const prod1 = {
    nome: "...",
    preco: 45
}

const prod2 = {
    nome: "...",
    preco: 243
}

// Função Factory simples

function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa())