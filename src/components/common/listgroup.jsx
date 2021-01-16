import React from "react";

const Listgroup = ({ data, caption, btnText }) => {
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
            <button className="btn btn-success btn-sm">{btnText}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listgroup;
