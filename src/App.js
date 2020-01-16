import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "Stephen Curry"
        },

        {
          name: "Kevin Durant"
        },

        {
          name: "Damian Lillard"
        },

        {
          name: "Anthony Davis"
        },

        {
          name: "Gianis Antetokumpo"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.players.map(player => (
            <li>{player.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
