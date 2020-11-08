///*
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(3))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(3))

//*/
dobro = a => 2 * a //Return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá"
console.log(ola())