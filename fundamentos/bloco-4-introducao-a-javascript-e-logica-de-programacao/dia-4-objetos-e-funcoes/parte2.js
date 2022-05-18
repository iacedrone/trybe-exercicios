let palavraArray = [];
let palavraInvertida = [];
let novaPalavra = '';

function verificaPalindrome(palavra) {
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        palavraInvertida.push(palavra[index])
    }
    // for (let index2 = 0; index2 <= palavra.length - 1; index2 += 1) {
    //     palavraArray.push(palavra[index2])
    // }
    novaPalavra = palavraInvertida.join('');
    if (novaPalavra === palavra) {
        console.log('É palíndromo');
    } else {
        console.log('Não é palíndromo')
    }
}

verificaPalindrome('tut')
