import React from "react";
import { Row, Col } from "antd";
import "./Clients.scss";
import { logos } from "../../assets/images/clients";
import Header from "../Header/Header";

const Clients = ({ className }) => {
  return (
    <div className={className}>
      <Header
        title={"Behold a Few Among the Many Companies Embracing Our Alumni."}
        subtitle={"Our Alumni Thrive in Top Global Tech Enterprises"}
      />
      <Row className="logos-row" justify="center">
        {Object.values(logos).map((logo, index) => (
          <Col xs={6} sm={3} md={3} lg={3} key={index}>
            <div className="logo-container">
              <img src={logo} alt={`Client logo ${index}`} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Clients;
