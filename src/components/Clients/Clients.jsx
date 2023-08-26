import React from "react";
import { Row, Col } from "antd";
import "./Clients.scss";
import { logos } from "../../assets/images/clients";

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="text-container">
        <h1>Our graduates call the world's biggest tech companies home</h1>
        <p>
          Our students graduate knowing how to make high-end, complex websites
          and software applications. These are just some of the companies our
          alumni now work for.
        </p>
      </div>

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
