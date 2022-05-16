let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]
let menorPalavra = array[0]

for (let iMaior = 0; iMaior < array.length; iMaior += 1) {
    if (array[iMaior].length > maiorPalavra.length) {
        maiorPalavra = array[iMaior]
    }
}

for (let iMenor = 0; iMenor < array.length; iMenor += 1) {
    if (array[iMenor].length < menorPalavra.length) {
        menorPalavra = array[iMenor]
    }
}

console.log(menorPalavra);
