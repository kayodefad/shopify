import React, { Component } from "react";
import Listgroup from "./common/listgroup";

class Nominationlist extends Component {
  state = {
    nominations: [
      { id: 1, title: "Saworoide", year: 1996 },
      { id: 2, title: "Avengers", year: 2020 },
      { id: 3, title: "Vikings", year: 1432 }
    ]
  };

  render() {
    return (
      <div className="card col-6">
        <Listgroup
          data={this.props.nominationList}
          caption="Nominations"
          btnText="remove"
          handleClick={this.props.handleRemoveMovie}
        />
      </div>
    );
  }
}

export default Nominationlist;
