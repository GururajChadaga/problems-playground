/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  Time: O(n)
    loop
  Space: O(2n)
    prefixProdExceptSelf and SuffixProdExceptSelf arrays
*/
const getPrefixAndSuffixProdExcepSelf = (arr) => {
  const prefixProdExceptSelf = [],
    suffixProdExceptSelf = [];
  let prodFromLeft = 1,
    prodFromRight = 1;
  for (let i = 0; i < arr.length; i++) {
    prodFromLeft = prodFromLeft * (i > 0 ? arr[i - 1] : 1);
    prodFromRight = prodFromRight * (i > 0 ? arr[arr.length - i] : 1);
    prefixProdExceptSelf.push(prodFromLeft);
    suffixProdExceptSelf.unshift(prodFromRight);
  }
  return { prefixProdExceptSelf, suffixProdExceptSelf };
};
const productExceptSelf = function (nums) {
  const { prefixProdExceptSelf, suffixProdExceptSelf } =
    getPrefixAndSuffixProdExcepSelf(nums);
  return prefixProdExceptSelf.map(
    (prefixProd, index) => prefixProd * suffixProdExceptSelf[index]
  );
};

/*
  Time: O(n)
    loop
  Space: O(1)
    no need to maintain two arrays for prefixProd and suffixProd.
    perform those operations on the same array
    prodcut array used to store result, so not counted
*/
const productExceptSelfSpaceOptimized = function (nums) {
  const productExceptSelf = [];
  let productFromLeftExceptSelf = 1,
    productFromRightExceptSelf = 1;
  for (let i = 0; i < nums.length; i++) {
    productExceptSelf[i] = productFromLeftExceptSelf;
    productFromLeftExceptSelf *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    productExceptSelf[i] *= productFromRightExceptSelf;
    productFromRightExceptSelf *= nums[i];
  }
  return productExceptSelf;
};
