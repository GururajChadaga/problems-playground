/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let reversed = 0,
    shiftLeftBy = 31;
  while (n) {
    const rightMostBit = n & 1;
    reversed = reversed | (rightMostBit << shiftLeftBy);
    n = n >>> 1;
    shiftLeftBy--;
  }
  /*
    to return negative numbers as positive numbers
    as >>> first converts negative numbers to its 2's compliment
    before applying the right shift operation.
    so n>>>0 converts n to it's 2's compliment, as x>>0 is x.
   */
  return reversed >>> 0;
};
