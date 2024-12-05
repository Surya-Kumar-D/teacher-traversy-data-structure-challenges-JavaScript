function formatPhoneNumber(numArr) {
  if (numArr.length < 10) return "Invalid Numbers. Need 10 Numbers";
  const areaCode = numArr.slice(0, 3).join("");
  const prefix = numArr.slice(3, 6).join("");
  const lineNumber = numArr.slice(6).join("");
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
