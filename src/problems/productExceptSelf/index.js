/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const product = [];
  // pass 1
  let currentProductFromLeftExceptSelf = 1;
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];
    product[index] = currentProductFromLeftExceptSelf;
    currentProductFromLeftExceptSelf *= value;
  }
  // pass 2
  let currentProductFromRightExceptSelf = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    const value = nums[index];
    product[index] *= currentProductFromRightExceptSelf;
    currentProductFromRightExceptSelf *= value;
  }
  return product;
};
