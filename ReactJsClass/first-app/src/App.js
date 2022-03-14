import "./App.css";
import FourthComponent from "./components/FourthComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StateExample from "./components/StateExample";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <div className="App">
      {/* <FirstComponents />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent /> */}

      <StateExample />
      <StateExample />
      <PropsExample name="Shubham" />
      <PropsExample name="Saurabh" />
      <PropsExample name="Sanket" />
      <PropsExample name="Parth" />
      <Router>
        <Link to="/">FirstComponent</Link>
        <Link to="/second">SecondComponent</Link>
        <Link to="/third">ThreeComponent</Link>
        <Link to="/fourth">FourthComponent</Link>

        <Switch>
          {/* <Route path="/">
            <FirstComponents />
          </Route> */}
          <Route path="/second">
            <SecondComponent />
          </Route>
          <Route path="/third">
            <ThirdComponent />
          </Route>
          <Route path="/fourth">
            <FourthComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
