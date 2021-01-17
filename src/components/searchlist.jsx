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

  render() {
    const movies = paginate(
      this.props.moviesList,
      this.state.currentPage,
      this.state.numberPerPage
    );

    return (
      <>
        <div className="col-8">
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
                <div className="col-4">
                  <Loading className="col-4" />
                </div>
                <div className="col-4">
                  <Loading className="col-4" />
                </div>
                <div className="col-4">
                  <Loading className="col-4" />
                </div>
              </>
            ) : (
              movies.map(movie => {
                return (
                  <div key={movie.imdbID} className="col-4">
                    <Movie
                      movie={movie}
                      handleClick={this.props.handleAddMovie}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Searchlist;
