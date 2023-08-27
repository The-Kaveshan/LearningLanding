import React from "react";
import { Row, Col, Timeline, Image } from "antd";
import "./Features.scss";
import Map from "../../assets/images/map.png";
import Header from "../Header/Header";

const Features = ({ className }) => {
  const features = [
    "Take advantage of career development and networking opportunities in the HyperionDev Graduate Program.",
    "Get the best possible preparation for your new career in tech, with mock interviews, assistance with polishing your CV and developer portfolio, and professional interview tips from our in-house career services team.",
    "Every piece of code you write is reviewed by professionals who check and refine code for some of the biggest companies out there.",
    "Expert on-demand feedback will get you writing efficient, error-free code, and keep you from getting stuck.",
    "Learn from anywhere, in a structure that fits your needs, life, and goals.",
    "We’re passionate about allowing everyone to have equal access to a tech career. Our bootcamps can be taken online or on our campuses, full-time or part-time.",
  ];

  return (
    <section className={className}>
      <Header
        title={"What Sets Us Apart"}
        subtitle={"We'll take you from beginner to job ready"}
      />
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12} className="timeline-column">
          <Timeline mode="left" aria-label="Features Timeline">
            {features.map((item, index) => (
              <Timeline.Item
                key={index}
                dot={<div className="custom-timeline-dot"></div>}
              >
                {item}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <Image
            width="100%"
            src={Map}
            alt="Illustrated map showcasing the global reach of the program."
            preview={false}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Features;
