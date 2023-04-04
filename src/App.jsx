import React from "react";
import Parent from "./components/Parent";
import { DataProvider } from "./global/DataProvider";

const App = () => {


  return (
    <>
      {/* <DataProvider> */}
        <Parent />
      {/* </DataProvider> */}
      {/* <h1>Heelo geekstrs</h1> */}
    </>
  );
};

export default App;
