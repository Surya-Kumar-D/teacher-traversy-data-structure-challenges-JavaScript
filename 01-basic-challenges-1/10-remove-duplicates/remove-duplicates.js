// function removeDuplicates(arr) {
//   const removedArr = new Set(arr);
//   return [...removedArr];
// }

function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (!uniqueArr.includes(arr[index])) {
      uniqueArr.push(arr[index]);
    }
  }
  return uniqueArr;
}

module.exports = removeDuplicates;
