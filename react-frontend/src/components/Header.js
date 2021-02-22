import React, { Component } from "react";
import Logo from "../img/logo.jpg"

class Header extends Component {
  render() {
    return (
      <div className="text-center row">
         <div className="col-3">
         <img
        //   src="https://logrocket-assets.io/img/logo.png"
        src={Logo}
          width="150"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
         </div>
        <div className="col-9">
        <h5>
          <i>teamtechkenya presents</i>
        </h5>
        <h1>App with React + Django <br/> By Engineer Ben And Felix </h1>
        <p>www.teamtechkenya.co.ke</p>
        </div>
        
        
      </div>
    );
  }
}

export default Header;