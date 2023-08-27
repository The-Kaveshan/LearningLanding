import React from "react";
import { Row, Col, Timeline, Image } from 'antd';
import "./Features.scss";
import Map from "../../assets/images/map.png"
import Header from "../Header/Header";

const Features = () => {
  return (
      <div className="features-container">
                <Header
        title={"What Sets Us Apart"}
        subtitle={"We'll take you from beginner to job ready"}
      />
          <Row gutter={[16, 16]} align="middle">  {/* Added align="middle" here */}
              <Col xs={24} md={12} className="timeline-column">
                  <Timeline mode="left">
                  <Timeline.Item dot={<div className="custom-timeline-dot" />}>Take advantage of career development and networking opportunities in the HyperionDev Graduate Program.</Timeline.Item>
                      <Timeline.Item dot={<div className="custom-timeline-dot" />}>Get the best possible preparation for your new career in tech, with mock interviews, assistance with polishing your CV and developer portfolio, and professional interview tips from our in-house career services team.</Timeline.Item>
                      <Timeline.Item dot={<div className="custom-timeline-dot" />}>Every piece of code you write is reviewed by professionals who check and refine code for some of the biggest companies out there.</Timeline.Item>
                      <Timeline.Item dot={<div className="custom-timeline-dot" />}>Expert on-demand feedback will get you writing efficient, error-free code, and keep you from getting stuck.</Timeline.Item>
                      <Timeline.Item dot={<div className="custom-timeline-dot" />}>Learn from anywhere, in a structure that fits your needs, life, and goals.</Timeline.Item>
                      <Timeline.Item dot={<div className="custom-timeline-dot" />}>We’re passionate about allowing everyone to have equal access to a tech career. Our bootcamps can be taken online or on our campuses, full-time or part-time.</Timeline.Item>
                  </Timeline>
              </Col>
              <Col xs={24} md={12}>
                  <Image
                      width="100%"
                      src={Map}
                      alt="Feature Image"
                      preview={false}
                  />
              </Col>
          </Row>
      </div>
  );
}


export default Features;
