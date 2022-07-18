const sum = require('./agora-a-pratica');

test('O retorno de sum(4, 5) é 9?', () => {
    expect(sum(4,5)).toBe(9)
})
