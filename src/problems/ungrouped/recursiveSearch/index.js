import { animals } from '../../mocks/index.js';

export const searchValuesInObject = () => {
  const searchObject = (obj, searchStr, results = []) => {
    const finalResults = results;
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((arrayValue) => {
          if (typeof arrayValue === 'object' && !Array.isArray(arrayValue)) {
            searchObject(arrayValue, searchStr, finalResults);
          }
        });
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        searchObject(value, searchStr, finalResults);
      } else if (
        value
          .toString()
          .toLowerCase()
          .includes(searchStr.toString().toLowerCase())
      ) {
        finalResults.push(value);
      }
    });
    return finalResults;
  };

  const searchResults = animals.map((animal) => searchObject(animal, 'gold'));
  let flattenedSearchResults = [];
  searchResults.forEach((result) => {
    flattenedSearchResults.push(...result);
  });
  console.log(flattenedSearchResults);
};

export const searchAllValuesOfAKey = () => {
  const searchObject = (obj, searchKey, results = []) => {
    const finalResults = results;
    if (obj) {
      Object.entries(obj).forEach(([key, value]) => {
        if (key === searchKey && typeof value !== 'object') {
          finalResults.push(value);
        } else if (typeof value === 'object') {
          searchObject(value, searchKey, finalResults);
        }
      });
    }
    return finalResults;
  };

  console.log('name', searchObject(animals, 'name'));
  console.log('id', searchObject(animals, 'id'));
};
