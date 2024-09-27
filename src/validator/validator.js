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
      switch (validation) {
        case "min":
          if (itemToValidate[key].length >= Number(validationValue)) {
            validData.push(itemToValidate);
            break;
          }

          errors.push({
            [key]: `${key} must contains at least ${validationValue} characters`,
          });
          break;

        case "max":
          if (itemToValidate[key].length <= Number(validationValue)) {
            validData.push(itemToValidate);
            break;
          }

          errors.push({
            [key]: `${key} must contains max ${validationValue} characters`,
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
