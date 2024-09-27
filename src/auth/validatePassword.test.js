import { validatePassword } from "./validatePassword";

describe.skip("validatePassword", () => {
  it("password has at least 8 char", () => {
    expect(validatePassword("123")).toBe("error");
  });

  it("password must have at least a letter", () => {
    expect(validatePassword("1233455677878")).toBe(
      "Password must have at least a letter"
    );
  });

  it("password must have at least an uppercase letter", () => {
    expect(validatePassword("1234567s")).toBe(
      "password must have at least a uppercase letter"
    );
  });

  it("password must have at least one of the allowed special chars $@!", () => {
    expect(validatePassword("12345678DS")).toBe(
      "password must have at least one of the allowed special chars $@!"
    );
  });
});
