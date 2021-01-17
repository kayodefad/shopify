import React from "react";

const Searchbar = props => {
  const searchStyle = {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: "translateY(-50%)"
  };

  return (
    <div className="card mb-5">
      <div className="card-body">
        <form onSubmit={props.handleSubmit} className="mb-1">
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
              onChange={props.handleChange}
              type="text"
              className="form-control"
              id="search"
              placeholder="Search movies"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
