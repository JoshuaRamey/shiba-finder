import React from "react";
import ReactDOM from "react-dom";
import dogNames from "dog-names";
import Swipe from "react-easy-swipe";

import DogCards from "./DogCards";
import Favorites from "./Favorites";
import Navigation from "./Navigation";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doggos: [],
      favoriteDoggos: [],
      view: "doggos",
      xDown: null,
      yDown: null
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true"
    )
      //fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(results => results.json())
      .then(data => {
        data.map(photo => {
          return this.setState({
            doggos: [
              ...this.state.doggos,
              {
                name: dogNames.allRandom(),
                image: photo,
                distance: Math.floor(Math.random() * 10)
              }
            ]
          });
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  dislike() {
    const array = [...this.state.doggos];
    array.splice(-1, 1);
    this.setState({ doggos: array });
  }

  favourite() {
    const array = [...this.state.doggos];
    const temp = {
      name: array[array.length - 1].name,
      image: array[array.length - 1].image,
      distance: array[array.length - 1].distance
    };
    array.splice(-1, 1);
    this.setState({
      favoriteDoggos: [...this.state.favoriteDoggos, temp],
      doggos: array
    });
  }

  render() {
    return (
      <div>
        <Navigation
          dogView={() => {
            this.setState({ view: "doggos" });
          }}
          favoritesView={() => {
            this.setState({ view: "favorites" });
          }}
        />
        <div className="content">
          {this.state.view === "doggos" ? (
            <Swipe
              onSwipeStart={this.onSwipeStart}
              onSwipeMove={this.onSwipeMove}
              onSwipeEnd={this.onSwipeEnd}
              onSwipeLeft={() => this.dislike()}
              onSwipeRight={() => this.favourite()}
            >
              <DogCards
                doggos={this.state.doggos}
                dislike={() => {
                  this.dislike();
                }}
                favorite={() => this.favourite()}
              />
            </Swipe>
          ) : (
            <Favorites
              matches={this.state.favoriteDoggos}
              removeFavorite={index => {
                const array = [...this.state.favoriteDoggos];
                array.splice(index, 1);
                this.setState({ favoriteDoggos: array });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
