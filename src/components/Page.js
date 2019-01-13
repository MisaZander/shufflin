import React, { Component } from "react";
import Image from "./Image";
import Footer from "./Footer";
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

  onClick = id => {
    let { images, score, highScore } = this.state;
    let newState = [];

    //Obtain the element of the clicked image
    let clickedImg = images.filter(image => image.id === id);

    if (clickedImg[0].clicked) {
      //Not unique, game over
      //Reset all clicked states to false
      newState = this.state.images.map(image => {
        image.clicked = false;
        return image;
      });
      score = 0;
      alert("Game over!");
    } else {
      //Unique click. +1
      newState = this.state.images.map(image => {
        if (image.id === id) {
          image.clicked = !image.clicked;
          //console.log("Id " + image.id + " is now " + image.clicked);
        }
        return image;
      });
      score++;
      if (score > highScore) highScore = score;
      if (score === 12) {
        alert("YOU'RE WINNER!");
        newState = this.state.images.map(image => {
          image.clicked = false;
          return image;
        });
        score = 0;
      }
    }
    this.setState({ images: newState, score, highScore });
    this.randomize();
  };

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    let stateCopy = this.state.images;
    let newState = [];
    for (let i = 0; stateCopy.length > 0; i++) {
      //Yank a random image out of the state. Splice returns an array.
      let element = stateCopy.splice(
        Math.floor(Math.random() * stateCopy.length),
        1
      );
      newState[i] = element[0];
    }
    this.setState({ images: newState });
  };

  render() {
    const { images, score, highScore } = this.state;
    const imgs = images.map(img => (
      <Image
        key={img.id}
        id={img.id}
        src={require("../img/" + img.src)}
        onClick={this.onClick}
      />
    ));
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <h1 className="navbar-brand">Clicky: Dank Memes Edition</h1>
            </div>
          </nav>
        </header>
        <main className="container text-center">
          <h1>The Page</h1>
          {imgs}
        </main>
        <div className="placeholder" />
        <footer className="footer">
          <Footer score={score} highScore={highScore} />
        </footer>
      </div>
    );
  }
}

export default Page;
