import React from "react";
import { useSelector } from "react-redux";

export default function AccountType() {
  const accType = useSelector((state) => state.banking);
  console.log("Account type" + accType);

  return (
    <div>
      <h2>{accType.isSavings ? "Savings Account" : "Current Account"}</h2>
    </div>
  );
}
