function highestScoringWord(str) {
  const splitStr = str.toLowerCase().split(" ");
  const scores = splitStr.map((alphabet) =>
    [...alphabet].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0)
  );
  const highestScore = scores.indexOf(Math.max(...scores));
  return splitStr[highestScore];
}

module.exports = highestScoringWord;
