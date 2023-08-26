import React from "react";
import { Row, Col } from "antd";
import "./Footer.scss";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import IconLogo from "../../assets/Icon_Logo.svg";
import AccreditationLogo from "../../assets/mict-seta-logo.png";

function FooterComponent() {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <h3>Company</h3>
          <ul>
            <li>Join our team</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </Col>

        <Col span={6}>
          <h3>Employers</h3>
          <ul>
            <li>Bootcamps</li>
            <li>Upskill your employees</li>
            <li>Success Stories</li>
          </ul>
        </Col>

        <Col span={6}>
          <h3>Students</h3>
          <ul>
            <li>#CodeDidThis</li>
            <li>Coding Careers</li>
            <li>Scholarships</li>
            <li>Get a student loan</li>
            <li>Resources</li>
          </ul>
        </Col>

        <Col span={6}>
          <h3>Popular Topics</h3>
          <ul>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Programming Information</li>
            <li>Carbon Reduction Plan</li>
          </ul>
        </Col>
      </Row>

      <div className="social-section">
        <div className="logos">
          <div className="logo logo-left">
            <img src={IconLogo} alt="First Logo" />
          </div>
          <div className="logo logo-right">
            <img src={AccreditationLogo} alt="Second Logo" />
          </div>
        </div>
        <p>
          Full Accreditation
          <br />
          Accreditation Number: ACC/2017/05/0005
        </p>
        <span>Follow us: </span>
        <div className="social-links">
          <a href="www.google.com">
            <FacebookOutlined />
          </a>
          <a href="www.google.com">
            <TwitterOutlined />
          </a>
          <a href="www.google.com">
            <InstagramOutlined />
          </a>
          <a href="www.google.com">
            <LinkedinOutlined />
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; 2023 Developed By Kaveshan Kistan. All rights reserved.
      </div>
    </div>
  );
}

export default FooterComponent;
