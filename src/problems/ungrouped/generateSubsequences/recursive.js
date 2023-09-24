/*
  Time: O(2^n * n)
  Space: O(n)
 */

const generateSubsequences = (arr) => {
  const subsequences = [];
  const permute = (index, subsequence) => {
    if (index >= arr.length) {
      subsequences.push([...subsequence]);
      return;
    }
    subsequence.push(arr[index]);
    permute(index + 1, subsequence);
    subsequence.pop();
    permute(index + 1, subsequence);
  };
  permute(0, []);
  return subsequences;
};

const res = generateSubsequences([1, 2, 3]);
console.log(res);
