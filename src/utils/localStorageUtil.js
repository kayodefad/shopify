function addToLocalStorage(key, movie) {
  if (localStorage.getItem(key)) {
    const nominatedMovies = JSON.parse(localStorage.getItem(key));
    nominatedMovies.push(movie);
    localStorage.setItem(key, JSON.stringify(nominatedMovies));
  } else {
    const nominatedMovies = [];
    nominatedMovies.push(movie);
    localStorage.setItem(key, JSON.stringify(nominatedMovies));
  }
}

function removeFromLocalStorage(key, movie) {
  let nominatedMovies = JSON.parse(localStorage.getItem(key));
  nominatedMovies = nominatedMovies.filter(m => m.imdbID !== movie.imdbID);
  localStorage.setItem(key, JSON.stringify(nominatedMovies));
}

export { addToLocalStorage, removeFromLocalStorage };
