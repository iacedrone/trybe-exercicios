let divisores = 0
let nPrimos = 0
let listaDeNumerosPrimos = [1]

for (let numero = 1; numero <= 10; numero += 1) {
    divisores = 0
    for (let antecessor = 1; antecessor <= numero; antecessor += 1) {
        if (numero % antecessor === 0) {
            divisores += 1
        }
    }
    if (divisores === 2) {
        listaDeNumerosPrimos.push(numero)

    }
}

console.log(listaDeNumerosPrimos[listaDeNumerosPrimos.length - 1])
