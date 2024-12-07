function validAnagrams(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let str of str1) {
    obj1[str] = (obj1[str] || 0) + 1;
  }
  for (let str of str2) {
    obj2[str] = (obj2[str] || 0) + 1;
  }
  for (let str of Object.keys(obj1)) {
    if (obj1[str] !== obj2[str]) return false;
  }
  return true;
}

module.exports = validAnagrams;
