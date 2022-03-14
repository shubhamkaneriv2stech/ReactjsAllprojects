import React from "react";
import Coin from "./components/coin/Coin";
import Counter from "./components/counter/Counter";
import Theme from "./components/theme/Theme";

const App = () => {
  return (
    <>
      <Counter />
      <Coin />
      <Theme />
    </>
  );
};

export default App;
