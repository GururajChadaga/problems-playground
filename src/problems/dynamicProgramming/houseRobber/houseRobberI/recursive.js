/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(2^n) exponential
    2 choices at every stage: pick house, don't pick house, for n houses
  Space O(n): auxiliary stack space for recursion with depth of n 
 */
const exploreHouses = (houses, houseNumber) => {
  if (houseNumber === houses.length - 1) return houses[houseNumber];
  if (houseNumber >= houses.length) return 0;

  return Math.max(
    houses[houseNumber] + exploreHouses(houses, houseNumber + 2), //pick current house, skip next house
    exploreHouses(houses, houseNumber + 1) //dont pick current house, proceed to next house
  );
};
const rob = function (houses) {
  return exploreHouses(houses, 0);
};
