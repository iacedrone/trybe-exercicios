const panela = (nome) => {
    const frase = `Tryber x aqui!`;
    return(frase.replace(`x`, nome));
}

const presunto = (esponja) => {
    const skills = ['Python', 'Java', 'HTML']
    return(`${esponja}
    Minhas 3 principais habilidades são:
    * ${skills[0]}
    * ${skills[1]}
    * ${skills[2]}`)
}

console.log(presunto(panela('Daniele')));