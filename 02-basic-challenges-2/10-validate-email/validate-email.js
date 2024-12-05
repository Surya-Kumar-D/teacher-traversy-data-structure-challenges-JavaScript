function validateEmail(email) {
  if (email.indexOf("@") === -1) return false;
  const [localPart, domainPart] = email.split("@");
  if (localPart.length === 0 || domainPart.length < 3) return false;
  const domainExtension = domainPart.split(".");
  if (domainExtension.length < 2 || domainExtension[1].length < 2) return false;
  return true;
}

module.exports = validateEmail;
