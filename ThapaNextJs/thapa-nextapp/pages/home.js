import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Home Page </title>
      </Head>
      <h1 className={styles.title}>this is Home page </h1>
      <Image
        src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        height="400px"
        width="800px"
      ></Image>
    </div>
  );
};

export default Home;
