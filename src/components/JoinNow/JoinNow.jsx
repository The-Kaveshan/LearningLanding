import React from 'react';
import { Row, Col, Button } from 'antd';
import { CodeOutlined, GlobalOutlined, DollarOutlined } from '@ant-design/icons';
import './JoinNow.scss';
import BackedLogo from "../../assets/facebook-google.png"
import Awards from '../Awards/Awards';

const JoinNow = () => {
  return (
    <div className="join-now-container">
      <Row gutter={[24, 24]} justify="center" align="middle">
        <Col xs={24} md={12} className="text-container">
          <h1>Join more than 100,000 students who have registered to learn to code at HyperionDev.</h1>
          <div className="features">
            <div><CodeOutlined />No coding experience required</div>
            <div><GlobalOutlined />Study from anywhere</div>
            <div><DollarOutlined /> Student funding available</div>
          </div>
          <div className="logo">
            {/* Add your logo here */}
            <img src={BackedLogo} alt="Backed by Logo" />
          </div>
        </Col>
        
        <Col xs={24} md={12} className="actions-container">
          <Button type="primary" className="apply-button">Apply Now</Button>
          <Button className="contact-button">Contact Us</Button>

          
          <Awards />
          
        </Col>
      </Row>
    </div>
  );
}

export default JoinNow;
