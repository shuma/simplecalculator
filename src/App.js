import React, { useState, useEffect } from "react";
import "./App.css";

import FlexGrid from "./components/FlexGrid";
import Col from "./components/Col";
import NumberFiled from "./components/NumberField";
import RadioField from "./components/RadioField";
import TotalField from "./components/TotalField";

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
          <NumberFiled
            labelName="Value 1"
            valueName="value1"
            value={values.value1}
            handleChange={handleChange}
          />
        </Col>
        <Col>
          <NumberFiled
            labelName="Value 2"
            valueName="value2"
            value={values.value2}
            handleChange={handleChange}
          />
        </Col>
        <Col>
          <NumberFiled
            labelName="Value 3"
            valueName="value3"
            value={values.value3}
            handleChange={handleChange}
          />
        </Col>
        <Col primary>
          <ul>
            <RadioField
              valueName="Sum"
              selectedOption={selectedOption}
              radioChange={radioChange}
            />
            <RadioField
              valueName="Multiply"
              selectedOption={selectedOption}
              radioChange={radioChange}
            />
            <TotalField total={total} />
          </ul>
        </Col>
      </FlexGrid>
    </div>
  );
};

export default App;
