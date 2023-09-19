/**
 * @param {number[]} height
 * @return {number}
 */

/*
  This is the optimal solution as we don't use extra space 
  Time: O(n)
  Space: O(1)
*/
/*
  area = maxHeightFromLeft * width - heights[left] * width
  area = maxHeightFromRight * width - heights[right] * width
  here width is always 1
*/
const trap = function (heights) {
  let left = 0,
    right = heights.length - 1,
    maxHeightFromLeft = 0,
    maxHeightFromRight = 0,
    totalArea = 0;
  while (left <= right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] <= maxHeightFromLeft)
        totalArea += maxHeightFromLeft - heights[left];
      else maxHeightFromLeft = heights[left];
      left++;
    } else {
      if (heights[right] <= maxHeightFromRight)
        totalArea += maxHeightFromRight - heights[right];
      else maxHeightFromRight = heights[right];
      right--;
    }
  }
  return totalArea;
};
