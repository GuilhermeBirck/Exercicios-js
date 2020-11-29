/*19)​O cardápio de uma lanchonete é o seguinte:
    Código |Descrição do Produto |Preço 
     100      Cachorro Quente       R$ 3,00
     200      Hambúrguer Simples    R$ 4,00
     300      Cheeseburguer         R$ 5,50
     400      Bauru                 R$ 7,50
     500      Refrigerante          R$ 3,50
     600      Suco                  R$ 2,80

    Implemente uma  função que receba como parâmetros o código do item pedido,
     a quantidade e calcule o valor a ser pago por aquele lanche.
     Considere que a cada execução somente será calculado um item.
     Use ocomando switch. Crie um caso default para produto não existente.
*/

function order(cod, amount) {
    switch(cod) {
        case 100:
            return `O Cachorro Quente com o codigo ${cod} custa um total R$${amount * 3.00}`
        case 200:
            return `O Hambúrguer Simples  com o codigo ${cod} custa um total R$${amount * 4.00}`
        case 300:
            return `O Cheeseburguer com o codigo ${cod} custa total R$${amount * 5.50}`
        case 400:
            return `O Bauru com o codigo ${cod} custa um total R$${amount * 7.50}`
        case 500:
            return `O Refrigerante com o codigo ${cod} custa um total R$${amount * 3.50}`
        case 600:
            return `O Suco com o codigo ${cod} custa um total R$${amount * 2.80}`
        default:
            return `Produto não existente.`
    }
}

console.log(order(100,3))
console.log(order(200,3))
console.log(order(300,3))
console.log(order(400,3))
console.log(order(500,3))
console.log(order(600,3))
console.log(order(700,3))