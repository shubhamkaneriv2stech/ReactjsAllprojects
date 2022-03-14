import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        {" "}
        <title>About Page </title>
      </Head>
      About Page
      <NavBar />
    </div>
  );
};

export default about;
