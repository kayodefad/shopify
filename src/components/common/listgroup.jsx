import React from "react";

const Listgroup = ({ data, caption, btnText, handleClick, ...rest }) => {
  return (
    <div className="card-body">
      <p className="font-weight-bold">{caption}</p>
      <ul className="list-group list-group-flush">
        {data.map(item => (
          <li
            key={item.imdbID}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              {item.Title}, {item.Year}
            </span>
            <button
              onClick={() => handleClick(item)}
              className="btn btn-success btn-sm"
              disabled={rest.type === "searchList" ? item.added : false}
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
