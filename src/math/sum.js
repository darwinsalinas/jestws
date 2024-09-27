import { validateParameters } from "./validate";

export const sum = (number1, number2) => {
  const validated = validateParameters(number1, number2);
  return validated.number1 + validated.number2;
};
