function diceGameSimulation(num) {
  const results = [];
  for (let i = 0; i < num; i++) {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    let result = "";
    const sumRandoms = random1 + random2;
    if (sumRandoms === 7 || sumRandoms === 11) {
      result = "win";
    } else if (sumRandoms === 2 || sumRandoms === 3 || sumRandoms === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    results.push({ dice1: random1, dice2: random2, sum: sumRandoms, result });
  }
  return results;
}

module.exports = diceGameSimulation;
