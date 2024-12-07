function sumOfEvenSquares(numArr) {
  return numArr
    .filter((num) => num % 2 == 0)
    .reduce((acc, curr) => acc + curr * curr, 0);
}

module.exports = sumOfEvenSquares;
