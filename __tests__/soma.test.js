// testes da soma
const add = require('../soma');

// Cenário de teste soma positivos
test('soma 1 + 2 deve ser igual a 3', () => {
    expect(add(1, 2)).toBe(3);
});

// Cenário de teste soma negativos
test('soma -1 + 1 deve ser igual a 0', () => {
    expect(add(-1, 1)).toBe(0);
});

// Cenário de teste soma com zeros
test('soma 0 + 0 deve ser igual a 0', () => {
    expect(add(0, 0)).toBe(0);
});