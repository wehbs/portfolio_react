import React from "react";

const Navbar = props => (
  <nav>
    <div className="nav-wrapper grey darken-1">
    <a href="#page-top">
    <i className="fa fa-hashtag"></i>
    <span>Wehbs</span>
  </a>
  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    </div>
  </nav>
        
);

export default Navbar;