// function areAllCharactersUnique(str) {
//   const newSet = new Set(str);
//   for (let el of str) {
//     if (newSet.has(el)) {
//       newSet.delete(el);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function areAllCharactersUnique(str) {
  const obj = {};

  for (let el of str) {
    obj[el] = (obj[el] | 0) + 1;
  }
  for (let el of Object.values(obj)) {
    if (el > 1) return false;
  }
  return true;
}
module.exports = areAllCharactersUnique;
