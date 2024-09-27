import { squareArea } from "./area";

test("calculates correctly the square area", () => {
  expect(squareArea(4)).toBe(16);
  expect(squareArea(12)).toBe(144);
});
