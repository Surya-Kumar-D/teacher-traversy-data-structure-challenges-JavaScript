function validatePassword(str) {
  if (str.length < 8) return false;
  const hasLowerCase = /[a-z]/.test(str);
  const hasUpperCase = /[A-Z]/.test(str);
  const hasNumbers = /[0-9]/.test(str);
  return hasLowerCase && hasUpperCase && hasNumbers;
}

module.exports = validatePassword;
