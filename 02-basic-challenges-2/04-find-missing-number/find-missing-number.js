function findMissingNumber(array) {
  if (array.length === 0) return 1;
  let missingNum = 0;
  console.log(array.includes(1));
  for (let index = 1; index <= array.length; index++) {
    if (!array.includes(index)) {
      missingNum = index;
      //   break;
    }
  }
  return missingNum;
}

module.exports = findMissingNumber;
