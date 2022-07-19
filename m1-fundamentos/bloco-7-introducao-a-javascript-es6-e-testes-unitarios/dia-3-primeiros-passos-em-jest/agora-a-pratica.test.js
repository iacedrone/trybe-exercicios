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