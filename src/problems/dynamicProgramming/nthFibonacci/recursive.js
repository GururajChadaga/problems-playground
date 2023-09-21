const n = 10;

// Time: O(2^n) exponential
// Space: O(1)
const nthFibRecursive = (n) => {
  if (n === 1 || n === 2) return 1;
  return nthFibRecursive(n - 1) + nthFibRecursive(n - 2);
};

console.log(nthFibRecursive(n));
