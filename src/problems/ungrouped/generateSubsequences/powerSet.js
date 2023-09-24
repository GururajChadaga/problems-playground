/*
  Time: O(2^n * n)
  Space: O(1)
 */
const generateSubsequences = (arr) => {
  let subsequences = [];
  for (let num = 0; num < 2 ** arr.length; num++) {
    let subsequence = [];
    for (let i = 0; i < arr.length; i++) {
      if (num & (1 << i)) subsequence.push(arr[i]);
    }
    subsequences.push(subsequence);
  }
  return subsequences;
};

console.log(generateSubsequences([1, 2, 3]));
