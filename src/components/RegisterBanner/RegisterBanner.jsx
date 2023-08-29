import React, { useState } from "react";
import { Button, Typography, Row, Col } from "antd";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./RegisterBanner.scss";
import colors from "../../_variables.scss";

const { Text } = Typography;

function RegisterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="animated-banner">
      <Row>
        <Col xs={24} md={24} lg={24} xl={24}>
          <Text className="text" role="heading" aria-level="2">
            Participate in Our Upcoming Informational Webinar Session!
          </Text>
          <Button
            size="large"
            icon={<ArrowRightOutlined />}
            style={{
              background: "transparent",
              color: `${colors.white}`,
            }}
            className={"register-button icon-animate"}
            aria-label="Register for the webinar"
          >
            Register Now
          </Button>
          <Button
            icon={<CloseOutlined />}
            type="text"
            style={{
              background: "transparent",
              color: `${colors.white}`,
              right: 0,
              position: "absolute",
              top: "0",
            }}
            aria-label="Close banner"
            onClick={() => setIsVisible(false)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default RegisterBanner;
