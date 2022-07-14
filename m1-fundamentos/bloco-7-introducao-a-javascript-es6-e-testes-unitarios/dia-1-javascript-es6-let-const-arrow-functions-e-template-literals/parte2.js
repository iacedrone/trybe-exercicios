const fatorar = (numero) => {
    let fatorial = numero;
    for (let index = numero - 1; index > 0; index --) {
        fatorial = fatorial * index
    }

    return(fatorial);
}

console.log(fatorar(5));
