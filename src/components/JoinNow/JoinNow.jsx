import React from "react";
import { Row, Col, Button } from "antd";
import { Avatar, Progress } from "antd";
import {
  CodeFilled,
  GlobalOutlined,
  DollarCircleFilled,
} from "@ant-design/icons";
import "./JoinNow.scss";
import BackedLogo from "../../assets/facebook-google.png";
import Logo1 from "../../assets/images/awards/switchup.png";
import Logo2 from "../../assets/images/awards/course-report.png";
import Logo3 from "../../assets/images/awards/google.png";
import { Typography } from "antd";
const JoinNow = ({ className }) => {
  const { Text } = Typography;
  const awardsData = [
    {
      img: Logo1,
      title: "Best Bootcamp Winner",
      rating: 4.7,
      percent: (4.7 / 5) * 100,
    },
    {
      img: Logo2,
      title: "Best Online Bootcamp Winner",
      rating: 4.7,
      percent: (4.7 / 5) * 100,
    },
    {
      img: Logo3,
      title: "Google Reviews",
      rating: 4.8,
      percent: (4.8 / 5) * 100,
    },
  ];

  return (
    <div className={className}>
      <Row gutter={[24, 24]} justify="center" align="middle">
        <Col xs={24} md={18} className="text-container">
          <h1>
            Join more than 100,000 students who have registered to learn to code
            at HyperionDev.
          </h1>
          <div className="features">
            <div>
              <CodeFilled />
              No coding experience required
            </div>
            <div>
              <GlobalOutlined />
              Study from anywhere
            </div>
            <div>
              <DollarCircleFilled /> Student funding available
            </div>
          </div>
          <div className="logo">
            <img src={BackedLogo} alt="Backed by Logo" />
          </div>
        </Col>
        <Col xs={24} md={6} className="actions-container">
          {awardsData.map((award, index) => (
            <Row className={"awards-row"}>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={3}
                key={index}
                className="award-col"
              >
                <Avatar
                  src={<img src={award.img} alt={award.title} />}
                  size={48}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={21}
                key={index}
                className="award-col"
              >
                <Text>{award.title}</Text>
                <div className="progress">
                  <Progress
                    percent={award.percent}
                    strokeColor={"#87d068"}
                    showInfo={false}
                  />
                  <Text className="progress-text">{`${award.rating}/5`}</Text>
                </div>
              </Col>
            </Row>
          ))}
          <Button className="apply-button">Apply Now</Button>
          <Button className="contact-button">Contact Us</Button>
        </Col>
      </Row>
    </div>
  );
};

export default JoinNow;
