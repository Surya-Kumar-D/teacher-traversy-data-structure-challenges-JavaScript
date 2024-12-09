function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, i) => {
    if (i === 0) {
      return false;
    }
    const prevCharCode = arr[i - 1].charCodeAt(0);
    const currentCharCode = char.charCodeAt(0);
    return currentCharCode - prevCharCode > 1;
  })[0];
  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}

module.exports = findMissingLetter;
