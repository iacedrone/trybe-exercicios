const myFizzBuzz = require('./agora-a-pratica.js');

test('Verifica se a função myFizzBuzz retorna o resultado esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})
