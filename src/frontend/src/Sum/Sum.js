import React, { useState } from "react";

export const Sum = () => {
  const [calculation, setCalculation] = useState({
    number1: 0,
    number2: 0,
    results: 0,
  });

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setCalculation({ ...calculation, [id]: value });
  };

  const handleCalculate = () => {
    setCalculation({
      ...calculation,
      results: parseInt(calculation.number1) + parseInt(calculation.number2),
    });
  };

  return (
    <div>
      <br />
      <label>Number1</label>
      <input
        onChange={(e) => handleOnChange(e)}
        type="number"
        id="number1"
        aria-label="number1"
        value={calculation.number1}
      />
      <label>number2</label>
      <input
        onChange={(e) => handleOnChange(e)}
        type="number"
        id="number2"
        aria-label="number2"
        value={calculation.number2}
      />
      <button onClick={() => handleCalculate()}>Calcular</button>
      <br />
      <h5>Results: {calculation.results}</h5>
    </div>
  );
};
