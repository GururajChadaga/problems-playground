/**
 * @param {number[]} nums
 * @return {number}
 */
// Without Kadanes
const maxProduct = function (nums) {
  let maxProduct = -Infinity,
    productFromLeft = 1,
    productFromRight = 1;
  for (let index = 0; index < nums.length; index++) {
    const valueFromLeft = nums[index],
      valueFromRight = nums[nums.length - index - 1];
    if (productFromLeft === 0) productFromLeft = 1;
    if (productFromRight === 0) productFromRight = 1;
    productFromLeft *= valueFromLeft;
    productFromRight *= valueFromRight;
    maxProduct = Math.max(maxProduct, productFromLeft, productFromRight);
  }
  return maxProduct;
};
