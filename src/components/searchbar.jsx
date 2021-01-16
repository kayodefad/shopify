import React from "react";

const Searchbar = props => {
  return (
    <div className="card mb-5">
      <div className="card-body">
        <form onSubmit={props.handleSubmit} className="mb-1">
          <label htmlFor="search" className="form-label">
            Movie title
          </label>
          <input
            onChange={props.handleChange}
            type="text"
            className="form-control"
            id="search"
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
