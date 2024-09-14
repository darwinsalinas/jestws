import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  it("password has at least 8 char", () => {
    expect(validatePassword("123")).toBe("error");
  });

  it("password must have at least a letter", () => {
    expect(validatePassword("1233455677878")).toBe(
      "Password must have at least a letter"
    );
  });
});
