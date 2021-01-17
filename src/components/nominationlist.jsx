import React from "react";
import Listgroup from "./common/listgroup";

const Nominationlist = ({ nominationList, handleRemoveMovie }) => {
  return (
    <div className="col-lg-4 text-dark">
      <Listgroup
        data={nominationList}
        caption="Nominations"
        btnText="Remove"
        handleClick={handleRemoveMovie}
      />
    </div>
  );
};

export default Nominationlist;
