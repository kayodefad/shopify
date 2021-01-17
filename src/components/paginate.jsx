import React from "react";
import _ from "lodash";

const Paginate = props => {
  const { numberOfItems, numberPerPage, currentPage, onSetPage } = props;

  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
  if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => onSetPage(page)}
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
