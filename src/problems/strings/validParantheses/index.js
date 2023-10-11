/**
 * @param {string} s
 * @return {boolean}
 */

/*
  Time: O(n)
    loop
  Time: O(n)
    stack
 */
const isValid = function (parantheses) {
  const stack = [];
  const closeToOpen = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openPrantheses = Object.values(closeToOpen);
  for (let paranthesis of parantheses) {
    if (openPrantheses.includes(paranthesis)) stack.push(paranthesis);
    else {
      if (stack.length && stack[stack.length - 1] === closeToOpen[paranthesis])
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};
