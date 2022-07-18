const sum = require('./agora-a-pratica');

test('O retorno de sum(4, 5) é 9?', () => {
    expect(sum(4,5)).toBe(9)
})
test('O retorno de sum(0, 0) é 0?', () => {
    expect(sum(0,0)).toBe(0)
})