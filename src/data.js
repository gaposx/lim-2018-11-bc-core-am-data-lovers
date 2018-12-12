// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  console.log(data);
  var filteredData = [...data];
  filteredData.pokemon.push("new value");
  console.log(filteredData);
  return filteredData;
};

const sortData = (data, sortBy, sortOrder) => {
  return sortedData;
};

const computeStats = (data) => {
  return computedData;
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
