import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <h2>BorjaWebDev</h2>
        <div className="header__nav">
          <a href="/">Contacto</a>
          <a href="/">Portfolio</a>
          <a href="/">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
