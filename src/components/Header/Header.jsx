import React from "react";
import "./Header.scss";

function Header({ title='', subtitle=''}) {
  return (
    <header>
      {subtitle && <h3>{subtitle}</h3>}
      {title && <h1>{title}</h1>}
    </header>
  );
}

export default Header;
