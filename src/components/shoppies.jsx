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

    this.setState({ movies: response.data.Search });
  };

  handleButtonClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const nominationList = [...this.state.nominationList];
    nominationList.push(movies[index]);
    this.setState({ nominationList });
    // console.log(movies[index].Title);
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
            handleButtonClick={this.handleButtonClick}
          />
          <Nominationlist nominationList={this.state.nominationList} />
        </div>
      </>
    );
  }
}

export default Shoppies;
