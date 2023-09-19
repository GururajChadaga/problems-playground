// const sumN = function (a) {
//   return function (b) {
//     if (typeof b === 'number') {
//       return sumN(a + b);
//     }
//     return a;
//   };
// };

// ES6 oneliner
const sumN = (a) => (b) => typeof b === 'number' ? sumN(a + b) : a;

export const runSumN = () => {
  console.log(sumN(1)(2)(3)(4)(0)(5)());
};
