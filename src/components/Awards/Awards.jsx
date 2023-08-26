import React from "react";
import { Card, Row, Col, Rate, Avatar } from "antd";
import "./Awards.scss";
import Logo1 from "../../assets/images/awards/switchup.png";
import Logo2 from "../../assets/images/awards/course-report.png";
import Logo3 from "../../assets/images/awards/google.png";

import { Typography } from "antd";

const Awards = () => {
  const { Title } = Typography;

  const awardsData = [
    {
      img: Logo1,
      title: "Best Bootcamp Winner",
      rating: 4.7,
    },
    {
      img: Logo2,
      title: "Best Online Bootcamp Winner",
      rating: 4.7,
    },
    {
      img: Logo3,
      title: "Google Reviews",
      rating: 4.8,
    },
  ];

  return (
    <div className="awards-container">
      <Row gutter={16}>
        {awardsData.map((award, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Avatar src={<img src={award.img} alt={award.title} />} size={64} />
            <Title level={5}>{award.title}</Title>
            <Rate disabled allowHalf defaultValue={award.rating} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Awards;
