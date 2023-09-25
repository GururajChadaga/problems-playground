/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*
  Time: 
    Genreal: exponential
    Specific: O(2^target * k)
    2^t is becase at each stage, we can pick or not pick the candidate
    k is average length of every combination generated
      this is considered as pushing combination into combinations takes time
  Space: O(k * x)
    k is average length of every combination generated
    x is the number of combinations
 */
const combinationSum = function (candidates, target) {
  const combinations = [];

  const dfs = (index, combination, target) => {
    if (target === 0) {
      combinations.push([...combination]);
      return;
    }
    if (index === candidates.length || target <= 0) return;
    combination.push(candidates[index]);
    dfs(index, combination, target - candidates[index]);
    combination.pop();
    dfs(index + 1, combination, target);
  };

  dfs(0, [], target);
  return combinations;
};
