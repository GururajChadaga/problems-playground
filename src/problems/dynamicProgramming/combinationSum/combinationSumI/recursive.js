/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*
  Time: 
    General: exponential
    Specific: O(2^target * k)
    2^t is becase at each stage, we can pick or not pick the candidate
    k is average length of every combination generated
      this is considered as pushing combination into combinations takes time
  Space: O(k * x) + recursion stack
    k is average length of every combination generated
    x is the number of combinations
 */
const combinationSum = function (candidates, target) {
  const combinations = [];
  const dfs = (candidates, target, currSum, currIndex, combination) => {
    if (currSum === target) {
      combinations.push([...combination]);
      return;
    }
    if (currSum > target || currIndex >= candidates.length) return;

    combination.push(candidates[currIndex]);
    dfs(
      candidates,
      target,
      currSum + candidates[currIndex],
      currIndex,
      combination
    );
    combination.pop();
    dfs(candidates, target, currSum, currIndex + 1, combination);
  };
  dfs(candidates, target, 0, 0, []);
  return combinations;
};
