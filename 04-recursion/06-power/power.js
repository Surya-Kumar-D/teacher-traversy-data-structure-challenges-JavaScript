function power(b, e) {
  if (e === 0) return 1;
  return b * power(b, e - 1);
}

module.exports = power;
