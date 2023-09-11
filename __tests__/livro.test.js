const Livro = require('../livro');

const database = [];

// Cenário de teste de criação de um livro
test('cria um livro', () => {
    const livro = new Livro(1, 'O Senhor dos Anéis', 'J. R. R. Tolkien');
    database.push(livro);
    expect(database.length).toBe(1);
});

// Cenário de teste de busca de um livro por id
test('busca um livro', () => {
    const livro = new Livro(2, 'O Hobbit', 'J. R. R. Tolkien');
    database.push(livro);
    const busca = database.find(livro => livro.id === 2);
    expect(busca.titulo).toBe('O Hobbit');
});

// Cenário de teste de alteração de um livro
test('altera um livro', () => {
    const livro = new Livro(3, 'O Silmarillion', 'J. R. R. Tolkien');
    database.push(livro);
    const busca = database.find(livro => livro.id === 3);
    busca.titulo = 'O Silmarillion - Edição Especial';
    expect(busca.titulo).toBe('O Silmarillion - Edição Especial');
});