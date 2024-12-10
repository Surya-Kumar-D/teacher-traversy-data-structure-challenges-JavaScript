function reverseString(str) {
  const n = str.length;
  if (n === 0) return "";
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

module.exports = reverseString;
