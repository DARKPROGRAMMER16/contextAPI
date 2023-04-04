import React, { useContext } from "react";
import { AppContext } from "../global/DataProvider";

const Grandchild = () => {

    const {data2,state,setState} = useContext(AppContext);
  return (
    <>
    <h2>grand child</h2>
      {/* <h4>
        {data.name} ----- {data.age}
      </h4> */}
      <h4>
        {data2.name} ----- {data2.age}
      </h4>
      <h3>score - {state}</h3>
      <button onClick={() => setState(state+1)}>click me</button>
    </>
  );
};

export default Grandchild;
