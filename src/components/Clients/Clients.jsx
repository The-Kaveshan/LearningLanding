import React from "react";
import { Row, Col } from "antd";
import "./Clients.scss";
import { logos } from "../../assets/images/clients";
import Header from "../Header/Header";

const Clients = ({ className }) => {
  return (
    <div className={className} role="complementary">
      <Header
        title={"Behold a Few Among the Many Companies Embracing Our Alumni."}
        subtitle={"Our Alumni Thrive in Top Global Tech Enterprises"}
      />
      <Row className="logos-row" justify="center" role="list">
        {Object.values(logos).map((logo, index) => (
          <Col xs={6} sm={3} md={3} lg={3} key={index} role="listitem">
            <div className="logo-container">
              <img 
                src={logo} 
                alt={`Logo of client number ${index + 1}`}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Clients;
