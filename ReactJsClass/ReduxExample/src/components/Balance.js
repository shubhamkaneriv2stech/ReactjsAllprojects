import React from "react";
import { useSelector } from "react-redux";

export default function Balance() {
  const bank = useSelector((state) => state.banking);

  console.log(bank);
  return (
    <div>
      <h2>Balance : {bank.balance}</h2>
    </div>
  );
}
