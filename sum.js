const validateParameters = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return "Not valid parameter";
  }

  return {
    number1,
    number2,
  };
};

export const sum = (number1, number2) => {
  const validated = validateParameters(number1, number2);
  return validated.number1 + validated.number2;
};
