import React from "react";

const Searchbar = ({ handleChange, handleSubmit }) => {
  const searchStyle = {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <div className="card mb-5 text-dark">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="mb-1">
          <label htmlFor="search" className="form-label">
            Movie title
          </label>
          <div style={{ position: "relative" }}>
            <i
              style={searchStyle}
              className="fa fa-search"
              aria-hidden="true"
            ></i>
            <input
              style={{ paddingLeft: 40, fontSize: "0.8rem" }}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="search"
              placeholder="Search movies"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
