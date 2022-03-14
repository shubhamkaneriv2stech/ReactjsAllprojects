import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function BankOperation() {
  const [amt, setAmt] = useState("");
  const dispatch = useDispatch();

  const getAmount = (e) => {
    setAmt(e.target.value);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={amt}
          placeholder="Amount"
          onChange={getAmount}
        />

        <button
          onClick={() => dispatch({ type: "deposit", payload: Number(amt) })}
        >
          Deposit
        </button>

        <button>Withdraw</button>
        <button>Interest</button>
        <button>Delete Account</button>
        <button>Change Account Type</button>
      </form>
    </div>
  );
}
