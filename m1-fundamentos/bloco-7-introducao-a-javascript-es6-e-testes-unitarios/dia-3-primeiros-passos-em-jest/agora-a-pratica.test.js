const {encode, decode} = require('./agora-a-pratica.js');

test('Encode e decode são funções?', () => {
    expect(typeof encode).toBe('function')
})