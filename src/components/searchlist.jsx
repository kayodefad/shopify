import React, { Component } from "react";
import Paginate from "./paginate";
import Movie from "./movie";
import { paginate } from "../utils/paginate";
import Loading from "./common/loading";

class Searchlist extends Component {
  state = {
    currentPage: 1,
    numberPerPage: 3
  };

  handleSetPage = page => {
    this.setState({ currentPage: page });
  };

  renderMovies(movies) {
    if (this.props.notFound) return <p>No matches found</p>;

    return movies.map(movie => {
      return (
        <div key={movie.imdbID} className="col-sm-6 col-md-4">
          <Movie movie={movie} handleClick={this.props.handleAddMovie} />
        </div>
      );
    });
  }

  render() {
    const movies = paginate(
      this.props.moviesList,
      this.state.currentPage,
      this.state.numberPerPage
    );

    return (
      <>
        <div className="col-lg-8">
          <p>
            Search results:{" "}
            <span className="font-weight-bold">{`"${this.props.searchTerm}"`}</span>
          </p>
          <Paginate
            numberOfItems={this.props.moviesList.length}
            currentPage={this.state.currentPage}
            onSetPage={this.handleSetPage}
            numberPerPage={this.state.numberPerPage}
          />
          <div className="row">
            {this.props.loading ? (
              <>
                <div className="col-sm-6 col-md-4">
                  <Loading />
                </div>
                <div className="col-sm-6 col-md-4">
                  <Loading />
                </div>
                <div className="col-sm-6 col-md-4">
                  <Loading />
                </div>
              </>
            ) : (
              this.renderMovies(movies)
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Searchlist;
