import React, { createContext, useState } from "react";

const AppContext = createContext();

const DataProvider = ({ children }) => {
  const data2 = {
    name: "mark",
    age: 20,
  };

  const data3 = {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
  };

  const [state, setState] = useState(0);

  return (
    <AppContext.Provider value={{ data2, data3, state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, DataProvider };
