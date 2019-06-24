import React from "react";
import ReactDOM from "react-dom";
import dogNames from "dog-names";

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
      view: "doggos"
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
            <DogCards
              doggos={this.state.doggos}
              dislike={() => {
                const array = [...this.state.doggos];
                array.splice(-1, 1);
                this.setState({ doggos: array });
              }}
              favorite={dog => {
                const array = [...this.state.doggos];
                const temp = { name: dog.name, image: dog.image };
                array.splice(-1, 1);
                this.setState({
                  favoriteDoggos: [...this.state.favoriteDoggos, temp],
                  doggos: array
                });
              }}
            />
          ) : (
            <Favorites matches={this.state.favoriteDoggos} />
          )}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
