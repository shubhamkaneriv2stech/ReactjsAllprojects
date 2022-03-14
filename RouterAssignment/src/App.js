import Approuter from "./components/Router/AppRouter";

import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
// App Function Simply return the AppRouter Components
const App = () => (
  <Provider store={store}>
    <Approuter />
  </Provider>
);

export default App;
