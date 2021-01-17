import React from "react";

const Movie = ({movie, handleClick}) => {
  return (
    <>
      <div className="card style mb-5">
        <img
          src={movie.Poster}
          style={{ height: 300 }}
          alt={movie.Title}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text text-center font-weight-bold">
            {movie.Title}
          </p>
          <div>
            <p>
              <span className="font-weight-bold">Year: </span>
              {movie.Year}
            </p>
            <p>
              <span className="font-weight-bold">Type: </span>
              {movie.Type}
            </p>
          </div>
          <button
            onClick={() => handleClick(movie)}
            className="btn btn-primary btn-sm btn-block mx-auto"
            disabled={movie.added}
            style={{ cursor: `${movie.added && "not-allowed"}` }}
          >
            Nominate
          </button>
        </div>
      </div>
    </>
  );
};

export default Movie;
