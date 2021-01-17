import React from "react";

const Listgroup = ({ data, caption, btnText, handleClick }) => {
  return (
    <div>
      <p className="font-weight-bold">{caption}</p>
      <ul className="list-group list-group-flush">
        {data.map(item => (
          <li
            key={item.imdbID}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="d-flex align-items-center">
              <img
                className="mr-2"
                style={{ height: 20 }}
                src={item.Poster}
                alt={item.Title}
              />{" "}
              <span>
                {item.Title}, {item.Year}
              </span>
            </span>
            <button
              onClick={() => handleClick(item)}
              className="btn btn-danger btn-sm"
            >
              {btnText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listgroup;
