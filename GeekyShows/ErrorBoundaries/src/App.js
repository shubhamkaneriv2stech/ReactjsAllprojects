import React, { Component } from "react";
import img1 from "./download (1).jpg";
import img2 from "./download (2).jpg";
import Image from "./Image";
import Error from "./Error";
export default class App extends Component {
  render() {
    return (
      <div>
        <Error>
          <Image img={img1} />
        </Error>
        <br />
        <br />
        <Error>
          <Image img={img2} />
        </Error>
        <Error>
          <Image img="NoImage" />
        </Error>
      </div>
    );
  }
}
