import React, { useState } from "react";
import { Button, Typography, Space, Row, Col } from "antd";
import {
  CloseOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./RegisterBanner.scss";

const { Text } = Typography;

function RegisterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="animated-banner">
      <Row justify="center">
        <Col xs={22} md={18} lg={16}>
          <Row>
            <Col xs={24} md={18}>
              <Space>
                <Text className="text">Participate in Our Upcoming Informational Webinar Session!</Text>
              </Space>
            </Col>
            <Col xs={24} md={6}>
              <Space align="center">
                <Button
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{ background: 'transparent', borderRadius: '0', border: '1.5px solid #FFFFFF', color: '#FFFFFF'}}
                >
                  Register Now
                </Button>
                
              </Space>
            </Col>
          </Row>
        </Col>
        <Button
                  icon={<CloseOutlined />}
                  type="text"
                  style={{ background: 'transparent', borderRadius: '0', color: '#FFFFFF', right: 0, position: 'absolute', top: '0'}}
                  onClick={() => setIsVisible(false)}
                />
      </Row>
    </div>
  );
}

export default RegisterBanner;
