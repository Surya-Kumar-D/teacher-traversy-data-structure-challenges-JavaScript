function findFirstNonRepeatingCharacter(str) {
  const obj = {};
  for (let el of str) {
    obj[el] = (obj[el] | 0) + 1;
  }
  for (let char of str) {
    if (obj[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
