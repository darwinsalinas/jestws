export const validatePassword = (password) => {
  if (password.length < 8) {
    return "error";
  }

  if (!isNaN(password)) {
    return "Password must have at least a letter";
  }

  const lowerCasePassword = password.toLowerCase();
  if (password === lowerCasePassword) {
    return "password must have at least a uppercase letter";
  }

  const validSpecialChars = ["@", "$", "!"];
};
