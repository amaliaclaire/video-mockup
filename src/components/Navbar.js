import React from "react";

class Navbar extends React.Component {


  render() {
    return (
      <div className="ui secondary menu">
        <button className="active item">
          Home
        </button>
        <button className="item">
           Messages
        </button>
        <button className="item">
           Friends
        </button>

        <div className="right menu">
          <div className="item">
            <div class="ui icon input">
              <input type="text" placeholder="search"/>
              <i class="search link icon"></i>
            </div>
            <button className="ui item">
            Logout
            </button>
          </div>
        </div>
      </div>
    )
  }
}



export default Navbar;
