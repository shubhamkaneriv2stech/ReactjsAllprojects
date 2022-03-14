import React from "react";
import CovidCount from "./useEffect/CovidCount";
import Effect from "./useEffect/Effect";
import InputFocus from "./useRef/InputFocus";
import LogButtonClicks from "./useRef/LogButtonClicks";
import StopWatch from "./useRef/StopWatch";
import Counter from "./useState/Counter";

import CounterReducer from "./useReducer/Counter";
import Form from "./useReducer/reducerForm/Form";
const App = () => {
  return (
    <div>
      {/* <Counter />
      <Effect />

      <CovidCount /> */}

      {/* <InputFocus />

      <StopWatch />
      <LogButtonClicks /> */}

      {/* <CounterReducer /> */}
      <Form />
    </div>
  );
};

export default App;
