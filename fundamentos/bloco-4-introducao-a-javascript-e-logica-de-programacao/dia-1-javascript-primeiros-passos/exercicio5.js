let anguloA = 50
let anguloB = 50
let anguloC = -50

let somaAngulos = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0

if (angulosPositivos) {
    if (somaAngulos === 180){
        console.log("É um triângulo")
    }
    else if (somaAngulos !== 180) {
        console.log("Não é um triângulo")
    }
}
else {
    console.log("Ângulo inválido")
}