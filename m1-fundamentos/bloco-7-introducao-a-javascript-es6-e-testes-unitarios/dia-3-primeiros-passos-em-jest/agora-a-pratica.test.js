const {encode, decode} = require('./agora-a-pratica.js');

describe('Questão 1', () => {
    test('Encode e decode são funções?', () => {
        expect(typeof encode).toBe('function')
        expect(typeof decode).toBe('function')
    })
})

test('2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345')
})

test('3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode(12345)).toBe('aeiou')
})

test('4. Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bola')).toBe('b4l1')
    expect(decode('1446')).toBe('aoo6')
})

test('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const palavraTeste = 'okaida'
    expect(encode(palavraTeste).length).toBe(palavraTeste.length)
})