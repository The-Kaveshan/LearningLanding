import React from "react";
import { Row, Col } from "antd";
import "./Footer.scss";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import IconLogo from "../../assets/images/Icon_Logo.svg";
import AccreditationLogo from "../../assets/images/mict-seta-logo.png";

function Footer({ className }) {
  return (
    <footer className={className}>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#join">Join our team</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </Col>

        <Col span={6}>
          <h2>Employers</h2>
          <ul>
            <li>
              <a href="#bootcamps">Bootcamps</a>
            </li>
            <li>
              <a href="#upskill">Upskill your employees</a>
            </li>
            <li>
              <a href="#success">Success Stories</a>
            </li>
          </ul>
        </Col>

        <Col span={6}>
          <h2>Students</h2>
          <ul>
            <li>
              <a href="#codedidthis">#CodeDidThis</a>
            </li>
            <li>
              <a href="#careers">Coding Careers</a>
            </li>
            <li>
              <a href="#scholarships">Scholarships</a>
            </li>
            <li>
              <a href="#studentloan">Get a student loan</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
          </ul>
        </Col>

        <Col span={6}>
          <h2>Popular</h2>
          <ul>
            <li>
              <a href="#software">Software Development</a>
            </li>
            <li>
              <a href="#web">Web Development</a>
            </li>
            <li>
              <a href="#programming">Programming Information</a>
            </li>
            <li>
              <a href="#carbon">Carbon Reduction Plan</a>
            </li>
          </ul>
        </Col>
      </Row>

      <div className="social-section">
        <div className="logos">
          <div className="logo logo-left">
            <img src={IconLogo} alt="Company Logo" />
          </div>
          <div className="logo logo-right">
            <img src={AccreditationLogo} alt="Accreditation Logo MICT SETA" />
          </div>
        </div>
        <p>
          Full Accreditation
          <br />
          Accreditation Number: ACC/2017/05/0005
        </p>
        <span>Follow us on </span>
        <div className="social-links">
          <a
            href="https://www.facebook.com/hyperiondev"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com/HypDev"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.instagram.com/hyperiondev/?hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/school/hyperion-development-south-africa/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; 2023 Developed By Kaveshan Kistan for HyperionDev. <br />
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
