// "using Math.Max Method";
// function findMaxNumber(arr) {
//   return Math.max(...arr);
// }

// Using For loop

function findMaxNumber(arr) {
  let currentElement = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > currentElement) currentElement = arr[index];
  }
  return currentElement;
}
module.exports = findMaxNumber;
