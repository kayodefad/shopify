import React from "react";

const Movie = props => {
  return (
    <>
      <div className="card style mb-5">
        <img
          src={props.movie.Poster}
          style={{ height: 300 }}
          alt={props.movie.Title}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text text-center font-weight-bold">
            {props.movie.Title}
          </p>
          <div>
            <p>
              <span className="font-weight-bold">Year: </span>
              {props.movie.Year}
            </p>
            <p>
              <span className="font-weight-bold">Type: </span>
              {props.movie.Type}
            </p>
          </div>
          <button
            onClick={() => props.handleClick(props.movie)}
            className="btn btn-success btn-sm btn-block mx-auto"
            disabled={props.movie.added}
            style={{ cursor: `${props.movie.added && "not-allowed"}` }}
          >
            Nominate
          </button>
        </div>
      </div>
    </>
  );
};

export default Movie;
