import React from "react";
import "./Header.css";

const appTitle = "News Now";

const Header = () => {
  return (
    <header>
      <div className="logo">{appTitle}</div>
    </header>
  );
};

export default Header;
