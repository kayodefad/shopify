import React, { Component } from "react";
import Searchbar from "./searchbar";
import Searchlist from "./searchlist";
import Nominationlist from "./nominationlist";
import axios from "axios";
import { toast } from "react-toastify";

class Shoppies extends Component {
  state = {
    searchTerm: "",
    notFound: false,
    movies: [],
    loading: false,
    nominationList: []
  };

  componentDidMount() {
    if (localStorage.getItem("nominatedMovies")) {
      this.setState({
        nominationList: JSON.parse(localStorage.getItem("nominatedMovies"))
      });
    }
  }

  handleChange = async e => {
    this.setState({ searchTerm: e.target.value });

    this.setState({ loading: true });
    e.preventDefault();

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=55ecf9c4&s=${e.target.value}`
    );

    if (response.data.Search === undefined) {
      this.setState({ loading: false, notFound: true });
      return;
    }

    const movies = response.data.Search.map(m => {
      const movie = this.state.nominationList.find(
        mov => mov.imdbID === m.imdbID
      );

      return {
        ...m,
        added: movie ? true : false
      };
    });

    this.setState({ movies, loading: false, notFound: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleAddMovie = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    this.setState({ movies });
    if (this.state.nominationList.length < 5) {
      if (this.state.nominationList.length === 4) {
        toast.info("You have completed your 5 nominations", {
          autoClose: false,
          position: "top-left"
        });
      }

      const nominationList = [...this.state.nominationList];
      nominationList.push(currentMovie);
      this.setState({ nominationList });
      toast.success("Movie added successfully", { autoClose: 1500 });
      currentMovie.added = true;

      // LocalStorage
      if (localStorage.getItem("nominatedMovies")) {
        const nominatedMovies = JSON.parse(
          localStorage.getItem("nominatedMovies")
        );
        nominatedMovies.push(currentMovie);
        localStorage.setItem(
          "nominatedMovies",
          JSON.stringify(nominatedMovies)
        );
      } else {
        const nominatedMovies = [];
        nominatedMovies.push(currentMovie);
        localStorage.setItem(
          "nominatedMovies",
          JSON.stringify(nominatedMovies)
        );
      }
      return;
    }
    toast.error("You have 5 nominations already");
  };

  handleRemoveMovie = movie => {
    const nominationList = [...this.state.nominationList];
    const updatedList = nominationList.filter(m => m !== movie);
    this.setState({ nominationList: updatedList });
    toast.warning("Movie removed", { autoClose: 1500 });
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    if (currentMovie) currentMovie.added = false;
    this.setState({ movies });

    // Local Storage
    let nominatedMovies = JSON.parse(localStorage.getItem("nominatedMovies"));
    nominatedMovies = nominatedMovies.filter(m => m.imdbID !== movie.imdbID);
    localStorage.setItem("nominatedMovies", JSON.stringify(nominatedMovies));
  };

  render() {
    return (
      <>
        <Searchbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <div className="row">
          <Searchlist
            moviesList={this.state.movies}
            searchTerm={this.state.searchTerm}
            handleAddMovie={this.handleAddMovie}
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
