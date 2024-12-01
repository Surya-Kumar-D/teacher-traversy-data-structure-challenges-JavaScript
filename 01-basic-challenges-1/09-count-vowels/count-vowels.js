function countVowels(str) {
  let count = 0;
  for (key of str) {
    switch (key) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        count++;
        break;
      default:
        break;
    }
  }
  return count;
}

module.exports = countVowels;
