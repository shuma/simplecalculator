import React, { createContext, useState } from "react";

export const NumberContext = createContext();

const NumberProvider = props => {
  const [values, setValues] = useState({ value1: 100, value2: 0, value3: 0 });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <NumberContext.Provider value={{ handleChange, values }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
