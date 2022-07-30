const verifyIsEqual = (myNumber, number) => myNumber === number;

const riffleResult = (myNumber, callback) => {
    const number = Math.floor(Math.random() * (5)) + 1;

    return (callback(myNumber, number)) ? `Parabéns, você ganhou; pois seu número era o ${number} e o sorteado era ${number}` : `Tente novamente, seu número ${myNumber} não é o mesmo que o sorteado (${number})`
}

console.log(riffleResult(2, verifyIsEqual));