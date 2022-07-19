const myFizzBuzz = require('./agora-a-pratica.js');

test('Verifica se a função myFizzBuzz retorna o resultado esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})

test('Faça uma chamada com um número divisível por 3, outro por 5 e verifique se os retornos são os esperados', () => {
    expect(myFizzBuzz(3)).toBe('fizz')
    expect(myFizzBuzz(5)).toBe('buzz')
})

describe('Questões 4 e 5', () => {
    test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('Muito doido')).toBe(false)
    })
})