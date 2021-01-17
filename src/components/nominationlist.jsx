import React from "react";
import Listgroup from "./common/listgroup";

const Nominationlist = props => {
  return (
    <div className="col-4">
      <Listgroup
        data={props.nominationList}
        caption="Nominations"
        btnText={<i className="fa fa-minus-circle" aria-hidden="true"></i>}
        handleClick={props.handleRemoveMovie}
      />
    </div>
  );
};

export default Nominationlist;
