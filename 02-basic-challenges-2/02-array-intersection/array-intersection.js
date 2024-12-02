// function arrayIntersection(arr1, arr2) {
//   const intersectedElements = [];
//   for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     if (arr2.includes(element)) {
//       intersectedElements.push(element);
//     }
//   }
//   return intersectedElements;
// }
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((el) => set2.has(el));
}
module.exports = arrayIntersection;
