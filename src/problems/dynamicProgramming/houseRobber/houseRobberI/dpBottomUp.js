/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n)
    loop
  Space O(n)
    dp array
 */
const rob = function (houses) {
  const dp = new Array(houses.length + 1).fill(-1);
  dp[houses.length] = 0;
  dp[houses.length - 1] = houses[houses.length - 1];

  for (let houseNumber = houses.length - 2; houseNumber >= 0; houseNumber--) {
    dp[houseNumber] = Math.max(
      houses[houseNumber] + dp[houseNumber + 2],
      dp[houseNumber + 1]
    );
  }
  return dp[0];
};

/*
  Time: O(n)
    loop
  Space O(1)
 */
const robSpaceOptimized = function (houses) {
  let next = houses[houses.length - 1],
    next2 = 0;

  for (let houseNumber = houses.length - 2; houseNumber >= 0; houseNumber--) {
    const curr = Math.max(houses[houseNumber] + next2, next);
    next2 = next;
    next = curr;
  }
  return next;
};
