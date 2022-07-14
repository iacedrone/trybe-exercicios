const maiorPalavra = (frase) => {
    let palavra = ''
    const fraseDividida = frase.split(' ');
    for (let index = 0; index < fraseDividida.length; index ++){
        (fraseDividida[index].length > palavra.length) ? palavra = fraseDividida[index] : palavra = palavra;
    }

    return(palavra)
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
