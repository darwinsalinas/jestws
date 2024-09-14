import { sum } from "./sum";

test.skip("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test.skip("adds 10 + 20 to equal 30", () => {
  expect(sum(18, 10)).toBe(28);
});

test.skip("throws an error with string parameters", () => {
  expect(sum("fg", "bc")).toBe("Not valid parameter");
});
