import React, { useState, useEffect } from "react";
import "./App.css";

import FlexGrid from "./components/FlexGrid";
import Col from "./components/Col";

const App = () => {
  const [values, setValues] = useState({ value1: 0, value2: 0, value3: 0 });
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const radioChange = e => {
    setSelectedOption(e.currentTarget.value);
  };

  const sum = (numbers = []) =>
    numbers.reduce(
      (curr, acc) => (isFinite(acc) ? curr + parseInt(acc) : curr),
      0
    );

  const multiply = (numbers = []) =>
    numbers.reduce(
      (curr, acc) => (isFinite(acc) ? curr * parseInt(acc) : curr),
      1
    );

  useEffect(() => {
    if (selectedOption === "Sum") {
      setTotal(sum(Object.values(values)));
    } else if (selectedOption === "Multiply") {
      setTotal(multiply(Object.values(values)));
    }
  }, [selectedOption, values]);

  return (
    <div className="App">
      <header className="App-header">Simple Calculator</header>
      <FlexGrid>
        <Col>
          <label htmlFor="value1">Value1</label>
          <input
            type="number"
            name="value1"
            value={values.value1}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <label htmlFor="value1">Value2</label>
          <input
            type="number"
            name="value2"
            value={values.value2}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <label htmlFor="value1">Value3</label>
          <input
            type="number"
            name="value3"
            value={values.value3}
            onChange={handleChange}
          />
        </Col>
        <Col primary>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="Sum"
                  checked={selectedOption === "Sum"}
                  onChange={radioChange}
                />
                Sum
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="Multiply"
                  checked={selectedOption === "Multiply"}
                  onChange={radioChange}
                />
                Multiply
              </label>
            </li>
            <li>
              <span>Resultat: {total}</span>
            </li>
          </ul>
        </Col>
      </FlexGrid>
    </div>
  );
};

export default App;
