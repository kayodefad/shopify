import React, { Component } from "react";
import Searchbar from "./searchbar";
import Searchlist from "./searchlist";
import Nominationlist from "./nominationlist";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorageUtil";
import axios from "axios";
import { toast } from "react-toastify";

class Shoppies extends Component {
  state = {
    searchTerm: "",
    notFound: "",
    movies: [],
    loading: false,
    nominationList: [],
    currentPage: 1,
    numberPerPage: 3,
  };

  componentDidMount() {
    if (localStorage.getItem("nominatedMovies")) {
      this.setState({
        nominationList: JSON.parse(localStorage.getItem("nominatedMovies")),
      });
    }
  }

  handleChange = async (e) => {
    this.setState({
      searchTerm: e.target.value,
      loading: true,
      currentPage: 1,
    });

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=55ecf9c4&s=${e.target.value}`
    );

    if (!response.data.Search) {
      this.setState({ loading: false, notFound: response.data.Error });
      return;
    }

    const movies = response.data.Search.map((m) => {
      const movie = this.state.nominationList.find(
        (mov) => mov.imdbID === m.imdbID
      );

      return {
        ...m,
        added: movie ? true : false,
      };
    });

    this.setState({ movies, loading: false, notFound: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleAddMovie = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    this.setState({ movies });
    if (this.state.nominationList.length < 5) {
      if (this.state.nominationList.length === 4) {
        toast.info("You have completed your 5 nominations", {
          autoClose: false,
          position: "top-left",
        });
      }

      const nominationList = [...this.state.nominationList];
      nominationList.push(currentMovie);
      this.setState({ nominationList });
      toast.success("Movie added successfully", { autoClose: 1500 });
      currentMovie.added = true;

      // Add to Local Storage
      addToLocalStorage("nominatedMovies", currentMovie);
      return;
    }
    toast.error("You have 5 nominations already", { autoClose: 1500 });
  };

  handleRemoveMovie = (movie) => {
    const nominationList = [...this.state.nominationList];
    const updatedList = nominationList.filter((m) => m !== movie);
    this.setState({ nominationList: updatedList });
    toast.warning("Movie removed", { autoClose: 1500 });
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    if (currentMovie) currentMovie.added = false;
    this.setState({ movies });

    // Remove from Local Storage
    removeFromLocalStorage("nominatedMovies", movie);
  };

  handleSetPage = (page) => {
    this.setState({ currentPage: page });
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
            currentPage={this.state.currentPage}
            numberPerPage={this.state.numberPerPage}
            handleAddMovie={this.handleAddMovie}
            handleSetPage={this.handleSetPage}
            loading={this.state.loading}
            notFound={this.state.notFound}
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
