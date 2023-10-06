/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (heights) {
  let left = 0,
    right = heights.length - 1,
    maxArea = 0;
  while (left < right) {
    const leftHeight = heights[left],
      rightHeight = heights[right],
      area = (right - left) * Math.min(leftHeight, rightHeight);
    maxArea = Math.max(maxArea, area);
    if (leftHeight < rightHeight) left++;
    else if (leftHeight > rightHeight) right--;
    else {
      left++;
      right--;
    }
  }
  return maxArea;
};
