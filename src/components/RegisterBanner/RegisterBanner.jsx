import React, { useState } from "react";
import { Button, Typography, Space, Row, Col } from "antd";
import {
  CloseCircleOutlined,
  InfoCircleOutlined,
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
                <InfoCircleOutlined />
                <Text strong>Learn more about our bootcamps.</Text>
                <Text>|</Text>
                <Text strong>Join our next info session webinar!</Text>
              </Space>
            </Col>
            <Col xs={24} md={6}>
              <Space align="center">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                >
                  Register Now
                </Button>
                <Button
                  icon={<CloseCircleOutlined />}
                  type="text"
                  onClick={() => setIsVisible(false)}
                />
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default RegisterBanner;
