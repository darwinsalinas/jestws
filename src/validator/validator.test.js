import { validator } from "./validator";

describe("passwordValidator", () => {
  const dataMock = [
    { name: "Darwin Salinas" },
    { password: "super_secure_password" },
  ];

  it("returns an object with validData and errors", () => {
    const result = validator([]);
    expect(result).toHaveProperty("validData");
    expect(result).toHaveProperty("errors");
  });

  it("returns empty array for errors when all fields are valid", () => {
    const { errors } = validator(
      [{ name: "min:3" }, { password: "min:8" }],
      dataMock
    );

    expect(errors).toEqual([]);
  });

  it("returns errors for each invalid field", () => {
    const { errors } = validator(
      [{ name: "min:19" }, { password: "min:25" }],
      dataMock
    );

    expect(errors).toEqual([
      {
        name: "name must contains at least 19 characters",
      },
      {
        password: "password must contains at least 25 characters",
      },
    ]);
  });

  it("validates strings with max length", () => {
    const { errors } = validator([{ name: "min:3|max:10" }], dataMock);

    expect(errors).toEqual([
      {
        name: "name must contains max 10 characters",
      },
    ]);
  });

  it("validates numbers with min and max length", () => {
    const { errors } = validator(
      [{ age: "number|min:18|max:100" }],
      [{ age: 200 }]
    );

    expect(errors).toEqual([
      {
        age: "age must be max 100",
      },
    ]);
  });
  it("validates number input", () => {
    const { errors } = validator([{ age: "number" }], [{ age: "cincuenta" }]);

    expect(errors).toEqual([
      {
        age: "age must be a number",
      },
    ]);
  });
});
