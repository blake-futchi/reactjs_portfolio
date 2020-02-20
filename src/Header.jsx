import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui pointing menu stackable borderless">
      <div className="ui container">
        <Link id="tab" className="header item" to="/">
          Blake Erickson
        </Link>
        <div className="right menu">
          <NavLink
            id="tab-element"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            id="tab-element"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Portfolio
          </NavLink>
          <NavLink
            id="tab-element"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;