import React from "react";
import CountUp from "react-countup";
import { Statistic, Row, Col } from "antd";
import "./Facts.scss"; // import the associated styles

const Facts = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className="facts-container">
      <h2 className="facts-header">A Life Changing Experience</h2>
      <Row gutter={16} className="facts-stats">
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Expert Code Reviews"
            value={100000}
            suffix="+"
            formatter={formatter}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Hours of Support in 2023"
            value={7400}
            suffix="+"
            formatter={formatter}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="Reached Career Outcomes"
            value={84}
            suffix="%"
            formatter={formatter}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Statistic
            title="High Student Satisfaction"
            value={5}
            suffix="/5"
            formatter={formatter}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Facts;
