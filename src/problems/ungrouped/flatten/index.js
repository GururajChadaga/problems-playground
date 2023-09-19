import { nestedArr, nestedObjectUser } from '../../../mocks/index.js';

const flattenArray = (arr, currentFlattened = []) => {
  let flattenedArr = currentFlattened;
  arr.forEach((arrItem) => {
    if (Array.isArray(arrItem)) {
      flattenArray(arrItem, flattenedArr);
    } else {
      flattenedArr.push(arrItem);
    }
  });
  return flattenedArr;
};

const flattenObject = (nestedObj) => {
  let flattenedObject = {};
  const flatten = (obj, ancestorsKey) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        flatten(value, `${ancestorsKey}_${key}`);
      } else {
        flattenedObject[`${ancestorsKey}_${key}`] = value;
      }
    });
  };
  flatten(nestedObj, 'user');
  return flattenedObject;
};

export const runFlatten = () => {
  console.log('Flattened Array:', flattenArray(nestedArr));
  console.log('Flattened Object:', flattenObject(nestedObjectUser));
};
