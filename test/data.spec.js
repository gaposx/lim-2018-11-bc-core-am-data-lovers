global.fixtures = {
  pokedata: require('../src/data/pokemon/pokemon.json'),
};
require('../src/data.js');

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('by name in DESC sort order and returns Zubat as the first element', () => {
    const sortedData = sortData(global.fixtures.pokedata.pokemon,'name','DESC');
    expect(sortedData[0].name).toBe('Zubat');
  });

  it('by name in ASC sort order and returns Abra as the first element', () => {
    const sortedData = sortData(global.fixtures.pokedata.pokemon,'name','ASC');
    expect(sortedData[0].name).toBe('Abra');
  });

  it('by num in ASC sort order and returns Bulbasaur as the first element', () => {
    const sortedData = sortData(global.fixtures.pokedata.pokemon,'num','ASC');
    expect(sortedData[0].name).toBe('Bulbasaur');
  });

  it('by name in DESC sort order and returns Mew as the first element', () => {
    const sortedData = sortData(global.fixtures.pokedata.pokemon,'num','DESC');
    expect(sortedData[0].name).toBe('Mew');
  });
});

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns an Array with 12 fire-type Pokemon ', () => {
    const filteredData = filterData(global.fixtures.pokedata.pokemon,{'type': 'Fire'});
    expect(Object.keys(filteredData).length).toBe(12);
  });
});

// describe('computeStats', () => {
//   it('is a function', () => {
//     expect(typeof computeStats).toBe('function');
//   });
// });
