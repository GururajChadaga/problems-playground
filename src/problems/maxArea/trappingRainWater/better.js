/**
 * @param {number[]} height
 * @return {number}
 */

/*
  This is not an optimal solution as we use extra space 
  for the prefixMax and suffixMax.
  Time: O(n)
  Space: O(2n)
*/

const getPrefixAndSuffixMax = (arr) => {
  let currPrefixMax = 0,
    currSuffixMax = 0,
    prefixMax = [],
    suffixMax = [];
  for (let i = 0; i < arr.length; i++) {
    currPrefixMax = Math.max(currPrefixMax, arr[i]);
    prefixMax.push(currPrefixMax);
    currSuffixMax = Math.max(currSuffixMax, arr[arr.length - i - 1]);
    suffixMax.unshift(currSuffixMax);
  }
  return { prefixMax, suffixMax };
};

/*
  currArea is the area of water that can be trapped at the
  current index.
  currArea = (width * minBorderHeight) - (width * height)
  here width is always 1
*/
const trap = function (heights) {
  const { prefixMax, suffixMax } = getPrefixAndSuffixMax(heights);
  let totalArea = 0;
  for (let [index, height] of Object.entries(heights)) {
    const minBorderHeight = Math.min(prefixMax[index], suffixMax[index]);
    const currArea = minBorderHeight - height;
    totalArea += currArea;
  }
  return totalArea;
};
