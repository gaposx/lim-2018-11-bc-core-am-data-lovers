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

const compareByName = (a,b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

const compareByNum = (a,b) => {
  if (parseInt(a.num) < parseInt(b.num)) {
    return -1;
  }
  if (parseInt(a.num) > parseInt(b.num)) {
    return 1;
  }
  return 0;
}

const sortData = (data, sortBy, sortOrder) => {
  let sortedData = [...data];
  if (sortBy === 'name') {
    sortedData.sort(compareByName);
  } else if (sortBy === 'num') {
    sortedData.sort(compareByNum);
  }
  if(sortOrder === 'DESC') {
    sortedData.reverse();
  }
  return sortedData;
};

// const computeStats = (data) => {
//   return computedData;
// };

window.filterData = filterData;
window.sortData = sortData;
// window.computeStats = computeStats;
