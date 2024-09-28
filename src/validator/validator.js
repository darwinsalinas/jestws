/**
 * Validates user inputs with min and max rules
 */
export const validator = (rules, data) => {
  const validData = [];
  const errors = [];

  rules.forEach((fieldStringRule) => {
    const key = Object.keys(fieldStringRule)[0];
    const value = Object.values(fieldStringRule)[0];

    const fieldRules = value.split("|");

    fieldRules.forEach((fieldRule) => {
      const [validation, validationValue] = fieldRule.split(":");

      const itemToValidate = data.find((it) => it.hasOwnProperty(key));
      const valueIsNotANumber = isNaN(itemToValidate[key]);
      switch (validation) {
        case "number":
          if (isNaN(itemToValidate[key])) {
            errors.push({
              [key]: `${key} must be a number`,
            });
            break;
          }
          validData.push(itemToValidate);
          break;
        case "min":
          if (valueIsNotANumber) {
            if (itemToValidate[key].length >= Number(validationValue)) {
              validData.push(itemToValidate);
              break;
            }

            errors.push({
              [key]: `${key} must contains at least ${validationValue} characters`,
            });
            break;
          }

          if (itemToValidate[key] >= Number(validationValue)) {
            validData.push(itemToValidate);
            break;
          }

          errors.push({
            [key]: `${key} must be min ${validationValue}`,
          });
          break;

        case "max":
          if (valueIsNotANumber) {
            if (itemToValidate[key].length <= Number(validationValue)) {
              validData.push(itemToValidate);
              break;
            }

            errors.push({
              [key]: `${key} must contains max ${validationValue} characters`,
            });
            break;
          }

          if (itemToValidate[key] <= Number(validationValue)) {
            validData.push(itemToValidate);
            break;
          }

          errors.push({
            [key]: `${key} must be max ${validationValue}`,
          });
          break;

        default:
          break;
      }
    });
  });

  return {
    validData,
    errors,
  };
};

console.log("Avimelex was here");
console.log("Darwin was here");
