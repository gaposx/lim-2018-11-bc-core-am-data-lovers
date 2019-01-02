// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filteredData = [...data];
  if (condition.hasOwnProperty('type')) {
    if (condition.type != 'all') {
      filteredData = data.filter(element => {
        return element.type.includes(condition.type)
      });
    }
  }

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
