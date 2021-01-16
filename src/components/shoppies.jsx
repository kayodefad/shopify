import React, { Component } from "react";
import Searchbar from "./searchbar";
import Searchlist from "./searchlist";
import Nominationlist from "./nominationlist";
import axios from "axios";
import { toast } from "react-toastify";
import Movie from "./movie";

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

    const movies = response.data.Search.map(m => {
      const movie = this.state.nominationList.find(
        mov => mov.imdbID === m.imdbID
      );

      return {
        ...m,
        added: movie ? true : false
      };
    });

    this.setState({ movies });
  };

  handleAddMovie = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    this.setState({ movies });
    if (this.state.nominationList.length < 5) {
      const nominationList = [...this.state.nominationList];
      nominationList.push(currentMovie);
      this.setState({ nominationList });
      toast.success("Movie added successfully");
      currentMovie.added = true;
      return;
    }
    toast.error("You have 5 nominations already");
  };

  handleRemoveMovie = movie => {
    const nominationList = [...this.state.nominationList];
    const updatedList = nominationList.filter(m => m !== movie);
    this.setState({ nominationList: updatedList });
    toast.success("Movie removed successfully");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    if (currentMovie) currentMovie.added = false;
    this.setState({ movies });
  };

  render() {
    return (
      <>
        <Searchbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Movie />
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
