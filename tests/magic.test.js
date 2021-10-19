const { getMagicCard } = require('../src/magic.js');
let favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = (array) => {
  // implemente sua função aqui
  const nameArray = array.map((card) => card.name);
  return nameArray;
}

describe(' Testa a função getMagicCard', () => { 

  afterEach(() => {
    favoriteCards = favoriteCards.filter((card) => card.name !== 'Beacon of Immortality');
  })

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    const favLength = favoriteCards.length;
    // implemente seus testes aqui
    expect(favLength).toBe(5);
    expect(favoriteCards[favLength - 1].name).toBe('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    const favByName = retrievesFavoriteCards(favoriteCards);
    const expectedArray = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    // implemente seus testes aqui
    expect(favoriteCards).toHaveLength(4);
    expect(favByName).toEqual(expectedArray);
  });
});
