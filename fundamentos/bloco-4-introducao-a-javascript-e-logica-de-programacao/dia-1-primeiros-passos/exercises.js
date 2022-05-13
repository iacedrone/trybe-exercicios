const custo = 100;
const venda = 200;

if (custo < 0 || venda < 0) {
    console.log('ERRO')
} else {
    console.log('O lucro será de', (venda - (custo + custo / 100 * 20)) * 1000)
}
