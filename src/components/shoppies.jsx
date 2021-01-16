import React, { Component } from "react";
import Searchbar from "./searchbar";
import Searchlist from "./searchlist";
import Nominationlist from "./nominationlist";
import axios from "axios";

class Shoppies extends Component {
  state = { searchTerm: "", movies: [] };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=55ecf9c4&s=${this.state.searchTerm}`
    );

    this.setState({ movies: response.data.Search });
  };

  render() {
    return (
      <>
        <Searchbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="row">
          <Searchlist moviesList={this.state.movies} searchTerm={this.state.searchTerm} />
          <Nominationlist />
        </div>
      </>
    );
  }
}

export default Shoppies;
