const strs = ['apple', '4oranges', '#85fives'];
/*
  Time: O(n)
  Space: O(1)
 */
const encode = (strs) => {
  return strs.reduce((acc, str) => `${acc}${str.length}${str}`, '');
};

const decode = (encoded) => {
  const decoded = [];
  let i = 0;
  while (i < encoded.length) {
    const length = +encoded[i];
    decoded.push(encoded.slice(i + 1, i + 1 + length));
    i += length + 1;
  }
  return decoded;
};

const encoded = encode(strs);
const decoded = decode(encoded);

console.log('strs:', strs);
console.log('encoded:', encoded);
console.log('decoded:', decoded);
