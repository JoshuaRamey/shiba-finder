import React from "react";
import ReactDOM from "react-dom";
import dogNames from "dog-names";

import DogCards from "./DogCards";
import Favorites from "./Favorites";

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
              { name: dogNames.allRandom(), image: photo }
            ]
          });
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  render() {
    // console.log(this.state.favoriteDoggos);
    return (
      <div className="content">
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}
        <button onClick={() => this.setState({ view: "favorites" })}>
          View Favorites
        </button>
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
              // const index = array.indexOf(dog);
              const temp = { name: dog.name, image: dog.image };
              // temp.push(array[index]);
              // const last = this.state.doggos[index];
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
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
