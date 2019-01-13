import React, { Component } from "react";
import Image from "./Image";
import images from "../images.json";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      images
    };
  }

  render() {
    const imgs = this.state.images.map(img => (
      <Image key={img.id} src={require("../img/" + img.src)} />
    ));
    return (
      <div className="App">
        <h1>The Page</h1>
        {imgs}
      </div>
    );
  }
}

export default Page;
