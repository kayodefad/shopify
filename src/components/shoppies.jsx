import React, { Component } from "react";
import Searchbar from "./searchbar";
import Searchlist from "./searchlist";
import Nominationlist from "./nominationlist";
import axios from "axios";

class Shoppies extends Component {
  state = { searchTerm: "", movies: [], nominationList: [] };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=55ecf9c4&s=${this.state.searchTerm}`
    );

    const movies = response.data.Search.map(movie => ({
      ...movie,
      added: false
    }));

    this.setState({ movies });
  };

  handleAddMovie = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    currentMovie.added = true;
    this.setState({ movies });
    const nominationList = [...this.state.nominationList];
    nominationList.push(currentMovie);
    this.setState({ nominationList });
  };

  handleRemoveMovie = movie => {
    const nominationList = [...this.state.nominationList];
    const updatedList = nominationList.filter(m => m !== movie);
    this.setState({ nominationList: updatedList });
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    currentMovie.added = false;
    this.setState({ movies });
  };

  render() {
    return (
      <>
        <Searchbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="row">
          <Searchlist
            moviesList={this.state.movies}
            searchTerm={this.state.searchTerm}
            handleAddMovie={this.handleAddMovie}
          />
          <Nominationlist
            nominationList={this.state.nominationList}
            handleRemoveMovie={this.handleRemoveMovie}
          />
        </div>
      </>
    );
  }
}

export default Shoppies;
