const typeSelect = document.getElementById('filter-by-select');
const pokemonData = [...POKEMON.pokemon];

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
  createPokedex(pokemonData);
  const pokemonTypes = new Set();

  pokemonData.forEach(element => {
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
  const filteredPokemon = filterData(pokemonData, condition);
  document.getElementById("pokedex").innerHTML = '';
  createPokedex(filteredPokemon);
});

startPokemon();

// const newCard = createPokeCard("");
// const pokedex = document.getElementById("pokedex").appendChild(newCard);