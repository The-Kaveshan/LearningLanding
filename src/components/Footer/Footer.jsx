import React from 'react';
import { Row, Col } from 'antd';
import './Footer.scss';

function FooterComponent() {
    return (
        <div className="footer-container">
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <h3>About Udemy</h3>
                    <ul>
                        <li>About us</li>
                        <li>Teach on Udemy</li>
                        <li>Get the app</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </Col>

                <Col span={6}>
                    <h3>Popular Courses</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Data Science</li>
                        <li>Business Analytics</li>
                        <li>Graphic Design</li>
                        <li>Digital Marketing</li>
                    </ul>
                </Col>

                <Col span={6}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Help & Support</li>
                        <li>Affiliate</li>
                        <li>Udemy for Business</li>
                        <li>Terms</li>
                        <li>Privacy policy</li>
                    </ul>
                </Col>

                <Col span={6}>
                    <h3>Udemy Business</h3>
                    <p>Teach what you love. Udemy gives you the tools to create an online course.</p>
                    <button>Start teaching today</button>
                </Col>
            </Row>

            <div className="social-links">
                <span>Follow us: </span>
                <a href="www.google.com">Facebook</a> | 
                <a href="www.google.com">Twitter</a> | 
                <a href="www.google.com">Instagram</a>
            </div>

            <div className="copyright">
                &copy; 2023 Udemy, Inc. All rights reserved.
            </div>
        </div>
    );
}

export default FooterComponent;
