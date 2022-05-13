let peca = 'Rei';
peca = peca.toLowerCase()

if (peca === 'rei') {
    console.log('Qualquer direção')
} else if (peca === 'rainha') {
    console.log('Qualquer direção')
} else if (peca === 'torre') {
    console.log('Linha reta')
} else if (peca === 'bispo') {
    console.log('Diagonal')
} else if (peca === 'cavalo') {
    console.log('Se move em L')
} else if (peca === 'peão') {
    console.log('Para a frente e para diagonal')
} else {
    console.log('ERRO')
}
