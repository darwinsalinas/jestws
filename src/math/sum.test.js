import { sum } from "./sum";
import * as validator from "./validate";

const validateParametersSpy = jest
  .spyOn(validator, "validateParameters")
  .mockReturnValue({ number1: 2, number2: 4 });

test.skip("adds 2 + 2 to equal 4", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);

  expect(validateParametersSpy).toHaveBeenCalled();
  expect(validateParametersSpy).toHaveBeenCalledTimes(1);
  expect(validateParametersSpy).toHaveBeenCalledWith(2, 4);
});

test.skip("throwsss an error with string parameters", () => {
  expect(sum("fg", "bc")).toBe("Not valid parameter");
});

test.skip("adds 10 + 20 to equal 30", () => {
  expect(sum(18, 10)).toBe(28);
});

test.skip("throws an error with string parameters", () => {
  expect(sum("fg", "bc")).toBe("Not valid parameter");
});
