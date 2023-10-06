/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  Time: O(n)
    number of states stored = number of houses
  Space O(n) + O(n): 
    O(n) for auxiliary stack space for recursion with depth of n 
    O(n) for memo
 */
const exploreHouses = (houses, houseNumber, memo) => {
  if (houseNumber === houses.length - 1) return houses[houseNumber];
  if (houseNumber >= houses.length) return 0;

  if (memo[houseNumber] !== -1) return memo[houseNumber];
  return (memo[houseNumber] = Math.max(
    houses[houseNumber] + exploreHouses(houses, houseNumber + 2, memo), //pick current house, skip next house
    exploreHouses(houses, houseNumber + 1, memo) //dont pick current house, proceed to next house
  ));
};
const rob = function (houses) {
  const memo = new Array(houses.length).fill(-1);
  return exploreHouses(houses, 0, memo);
};
