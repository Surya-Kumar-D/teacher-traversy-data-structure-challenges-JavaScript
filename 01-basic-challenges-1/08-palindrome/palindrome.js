// using inbuilt reverse;
// function isPalindrome(str) {
//   return str.split(" ").reverse().join(" ") === str;
// }

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr.split("").reverse().join("") === cleanedStr;
}

module.exports = isPalindrome;
