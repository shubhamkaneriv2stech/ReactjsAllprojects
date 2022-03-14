import React from "react";
import CommonTable from "./CommonTable";
import col from "./HeaderAndColumnArray";
import data from "./Data";

const PassingData = () => {
  return <CommonTable data={data} columns={col} />;
};

export default PassingData;
