import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Balance from "./components/Balance";
import BankOperation from "./components/BankOperation";
import AccountType from "./components/AccountType";

function App() {
  return (
    <div className="App">
      <Login />
      <Balance />
      <BankOperation />
      <AccountType />
    </div>
  );
}

export default App;
