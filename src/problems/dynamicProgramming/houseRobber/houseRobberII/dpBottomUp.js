/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  Time: O(n) for loop
    two-pass
  Space O(1)
    two-pass
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

const rob = function (circularHouses) {
  if (circularHouses.length === 1) return circularHouses[0];
  return Math.max(
    robSpaceOptimized(circularHouses.slice(0, -1)),
    robSpaceOptimized(circularHouses.slice(1))
  );
};
