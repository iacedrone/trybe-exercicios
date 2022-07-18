const myRemove = require('./agora-a-pratica.js')

test('A chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado?', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
test('A chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})