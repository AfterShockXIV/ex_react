import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_MODEL } from "../Models/RouterModel";
import "./Utility.scss";
const NavbarContainer = () => {
  return (
    <>
      <header className="navheader-container">
        <nav className="navbar-container">
          <div className="logo-container">
            <h4 style={{ color: '#fff'}}>AFTER</h4>
          </div>
          <ul className="navitem-container">
            {ROUTE_MODEL.map((res, i) => {
              return (
                <li className="navitemlist-container" ket={i}>
                  <NavLink to={res.PAGEPATH}>{res.PAGENAME}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavbarContainer;
