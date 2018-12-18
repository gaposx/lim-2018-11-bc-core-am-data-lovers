const createPokeCard = (pokemon) => {
  const card = document.createElement("DIV");
  card.setAttribute("class", "card");
  const cardName = document.createElement("DIV");
  const name = document.createElement("H3");
  name.setAttribute("class","pokemon-name");
  name.innerHTML = pokemon.name;
  cardName.appendChild(name);
  card.appendChild(cardName);

  const cardImage = document.createElement("DIV");
  const image = document.createElement("IMG");
  image.setAttribute("class","pokemon-image");
  image.setAttribute("src",pokemon.img);
  cardImage.appendChild(image);
  card.appendChild(cardImage);

  const cardTypes = document.createElement("DIV");
  const types = document.createElement("P");
  types.setAttribute("class","pokemon-type");
  
  var allTypes = "";
  pokemon.type.forEach(type => allTypes += type + ', ')
  types.innerHTML = "Tipo: " + allTypes;
  
  cardTypes.appendChild(types);
  card.appendChild(cardTypes);

  return card;
}

const startPokedex = () => {
  POKEMON.pokemon.forEach(pokemon => {
    let card = createPokeCard(pokemon);
    const pokedex = document.getElementById("pokedex").appendChild(card);
  });
}

startPokedex();


// const newCard = createPokeCard("");
// const pokedex = document.getElementById("pokedex").appendChild(newCard);