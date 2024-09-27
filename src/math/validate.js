export const validateParameters = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return "Not valid parameter";
  }

  return {
    number1,
    number2,
  };
};
