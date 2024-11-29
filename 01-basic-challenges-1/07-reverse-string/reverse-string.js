function reverseString(str) {
  let reversed = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    reversed += element;
  }
  return reversed;
}

module.exports = reverseString;
