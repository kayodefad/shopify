import React from "react";
import Listgroup from "./common/listgroup";

const Searchlist = props => {
  return (
    <div className="card col-6">
      <Listgroup
        data={props.moviesList}
        caption={`Results for "${props.searchTerm}"`}
        btnText="Add movie"
      />
    </div>
  );
};

export default Searchlist;
