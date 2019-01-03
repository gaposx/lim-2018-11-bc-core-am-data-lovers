const typeSelect = document.getElementById('filter-by-select');
const sortSelect = document.getElementById('sort-by-select');
const sortDirectionSelect = document.getElementById('sort-direction-select');
const pokemonData = [...POKEMON.pokemon];
let currentPokemonData = [...POKEMON.pokemon];

const createPokeCard = (pokemon) => {
  const card = document.createElement("DIV");
  card.setAttribute("class", "card");
  const cardName = document.createElement("DIV");
  const name = document.createElement("H3");
  name.setAttribute("class","pokemon-name");
  name.innerHTML = parseInt(pokemon.num) + ". " + pokemon.name;
  cardName.appendChild(name);
  card.appendChild(cardName);

  const cardImage = document.createElement("DIV");
  const image = document.createElement("IMG");
  image.setAttribute("class","pokemon-image");
  image.setAttribute("src",pokemon.img);
  cardImage.appendChild(image);
  card.appendChild(cardImage);

  // debugger
  const cardTypes = document.createElement("DIV");
  const typeHeader = document.createElement("P");
  typeHeader.setAttribute("class","pokemon-type-header");
  typeHeader.innerHTML = "Tipo";
  cardTypes.appendChild(typeHeader);

  pokemon.type.forEach(type => {
    const types = document.createElement("P");
    types.setAttribute("class","pokemon-type");
    types.innerHTML = type;
    cardTypes.appendChild(types);
  });

  card.appendChild(cardTypes);

  return card;
}

const startPokemon = () => {
  createPokedex(currentPokemonData);
  const pokemonTypes = new Set();

  currentPokemonData.forEach(element => {
    element.type.forEach(type => {
      pokemonTypes.add(type);
    }) 
  });
  addPokemonTypes(pokemonTypes)
}

const createPokedex = (pokemon) => {
  pokemon.forEach(element => {
    let card = createPokeCard(element);
    document.getElementById("pokedex").appendChild(card);
  });
}

const addPokemonTypes = (types) => {
  types.forEach(type => {
    const option = document.createElement("OPTION");
    option.setAttribute("value",type.toString());
    option.innerHTML = type.toString();
    typeSelect.appendChild(option);
  });
}

typeSelect.addEventListener('change', (evt) => {
  const condition = {'type': evt.target.value.toString()}
  currentPokemonData = pokemonData;
  currentPokemonData = filterData(currentPokemonData, condition);
  sortSelects();
  document.getElementById("pokedex").innerHTML = '';
  createPokedex(currentPokemonData);
});

const sortSelects = () => {
  const sortBy = sortSelect.value.toString();
  const sortDirection = sortDirectionSelect.value.toString();
  
  currentPokemonData = sortData(currentPokemonData, sortBy, sortDirection);
  
  document.getElementById("pokedex").innerHTML = '';
  createPokedex(currentPokemonData);
}

sortSelect.addEventListener('change', sortSelects);
sortDirectionSelect.addEventListener('change', sortSelects);

startPokemon();