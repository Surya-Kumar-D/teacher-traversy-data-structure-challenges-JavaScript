function findMissingLetter(array) {
  const start = array[0].charCodeAt(0);
  let result = "";
  for (
    let index = start;
    index <= array[array.length - 1].charCodeAt(0);
    index++
  ) {
    console.log(index);
    if (!array.includes(String.fromCharCode(index))) {
      result = String.fromCharCode(index);
    }
  }
  return result;
}

module.exports = findMissingLetter;
