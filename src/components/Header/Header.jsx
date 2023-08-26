import React from "react";
import { Typography } from "antd";
import "./Header.scss";
function Header({ title = "", subtitle = "" }) {
  const { Paragraph, Text } = Typography;

  return (
    <>
      {subtitle ? <h3>{subtitle}</h3> : ""}
      {title ? <h1>{title}</h1> : ""}
    </>
  );
}

export default Header;
