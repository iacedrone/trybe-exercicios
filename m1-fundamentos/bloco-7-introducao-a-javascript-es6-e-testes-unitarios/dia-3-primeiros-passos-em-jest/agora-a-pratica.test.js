const sum = require('./agora-a-pratica');

test('O retorno de sum(4, 5) é 9?', () => {
    expect(sum(4,5)).toBe(9)
})
test('O retorno de sum(0, 0) é 0?', () => {
    expect(sum(0,0)).toBe(0)
})
test('A função sum lança um erro quando os parâmetros são 4 e "5"?', () => {
    expect(() => sum(4,"5")).toThrowError()
})