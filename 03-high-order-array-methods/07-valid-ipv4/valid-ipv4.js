const isValidIPv4 = (str) => {
  const splitStr = str.split(".");
  if (splitStr.length !== 4) return false;
  return splitStr.every((el) => {
    const num = parseInt(el);
    return num >= 0 && num <= 255 && el === num.toString();
  });
};

module.exports = isValidIPv4;
