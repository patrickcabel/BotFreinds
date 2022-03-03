import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event);
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
  };

  render() {
    return (
      <div className="tc">
        <h1>BotFriends</h1>;
        <SearchBox searchChange={this.onsearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}

export default App;
