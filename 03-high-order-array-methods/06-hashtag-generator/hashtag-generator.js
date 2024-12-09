function generateHashtag(str) {
  if (str.length > 140 || str.length < 1) return false;
  return (
    "#" +
    str
      .trim()
      .split(" ")
      .filter((el) => el.length > 0)
      .map((el) => `${el[0]?.toUpperCase()}${el.slice(1)}`)
      .join("")
  );
}

module.exports = generateHashtag;
