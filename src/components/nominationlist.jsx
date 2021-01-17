import React from "react";
import Listgroup from "./common/listgroup";

const Nominationlist = props => {
  return (
    <div className="col-lg-4">
      <Listgroup
        data={props.nominationList}
        caption="Nominations"
        btnText="Remove"
        handleClick={props.handleRemoveMovie}
      />
    </div>
  );
};

export default Nominationlist;
