const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const result = await getMagicCardSimulator('130550');
    
    // implemente seus testes aqui
    expect(result).toEqual(expected);
    expect(Array.isArray(result.types)).toBe(true);
    expect(result.subtypes.length).toBe(2);
    expect(result.rarity).toBe("Uncommon");
    expect(result.name).toBe("Ancestor's Chosen");
    expect(result.manaCost).toBe('{5}{W}{W}');
  });
});
