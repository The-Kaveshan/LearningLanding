import React from "react";
import CountUp from "react-countup";
import { Statistic, Row, Col, Typography } from "antd";
import "./Facts.scss";
import Header from "../Header/Header";

const Facts = ({className}) => {
  const {Text} = Typography;
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className={className}>
      <Header
        title={"An Experience That Transforms Lives"}
        subtitle={""}
      />
      <Row gutter={16} className="facts-stats">
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Expert Code Reviews"
            value={100000}
            suffix="+"
            formatter={formatter}
          />
          <Text>We've perfected the method of teaching tech skills by incorporating expert code review in all of our bootcamps. Get your code reviewed by experts from Day 1, so you can learn industry-grade practices.</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Hours of Support in 2023"
            value={7400}
            suffix="+"
            formatter={formatter}
          />
          <Text>Our students receive comprehensive support and feedback from an expert team of code reviewers while studying with us. Expert help is just a video call away.</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Reached Career Outcomes"
            value={84}
            suffix="%"
            formatter={formatter}
          />
          <Text disabled>Most of our graduates end up reaching their career goals by finding a job or upskilling in the tech industry, while 80% of our grads secured a job within 6 months of graduating.</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="High Student Satisfaction"
            value={5}
            suffix="/5"
            formatter={formatter}
          />
          <Text>With hundreds of 5-star reviews from our students and alumni, we're one of the top-rated tech education providers in the world.</Text>
        </Col>
      </Row>
    </div>
  );
};

export default Facts;
