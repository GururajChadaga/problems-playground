/**
 * @param {number[]} height
 * @return {number}
 */
const containerWithMostWater = function (height) {
  let left = 0,
    right = height.length - 1,
    maxArea = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else {
      left++;
      right--;
    }
  }
  return maxArea;
};
