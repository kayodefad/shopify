import React from "react";
import Paginate from "./paginate";
import Movie from "./movie";
import { paginate } from "../utils/paginate";
import Loading from "./common/loading";

const Searchlist = props => {
  const {
    moviesList,
    currentPage,
    numberPerPage,
    notFound,
    handleAddMovie,
    handleSetPage,
    searchTerm,
    loading
  } = props;

  const renderMovies = movies => {
    if (notFound) return <p className="container">{notFound}</p>;

    return movies.map(movie => {
      return (
        <div key={movie.imdbID} className="col-sm-6 col-md-4">
          <Movie movie={movie} handleClick={handleAddMovie} />
        </div>
      );
    });
  };

  const movies = paginate(moviesList, currentPage, numberPerPage);

  return (
    <>
      <div className="col-lg-8 text-dark">
        <p className="text-light">
          Search results:{" "}
          <span className="font-weight-bold">{`"${searchTerm}"`}</span>
        </p>
        {!notFound && (
          <Paginate
            numberOfItems={moviesList.length}
            currentPage={currentPage}
            onSetPage={handleSetPage}
            numberPerPage={numberPerPage}
          />
        )}
        <div className="row">
          {loading ? (
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
            renderMovies(movies)
          )}
        </div>
      </div>
    </>
  );
};

export default Searchlist;
