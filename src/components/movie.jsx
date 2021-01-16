import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    return (
      <div className="card style">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
          alt="spiderman"
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text text-center font-weight-bold">The Avengers</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p>
                <span className="font-weight-bold">Year: </span>2020
              </p>
              <p>
                <span className="font-weight-bold">Type: </span>movie
              </p>
            </div>
            <button className="btn btn-success btn-sm">Add movie</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
