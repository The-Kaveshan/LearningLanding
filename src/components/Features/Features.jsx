import React, { useState, useEffect } from "react";
import { Row, Col, Timeline, Image } from "antd";
import "./Features.scss";
import Map from "../../assets/images/map.png";
import Header from "../Header/Header";

const defaultFeatures = [
  "<b>Career Boost with HyperionDev Graduate Program:</b> Build a strong career network with exclusive opportunities through our Graduate Program for enhanced career development.",
  "<b>Comprehensive Career Support:</b> Beyond teaching code, we focus on careers. Get mock interviews, personalized CV/portfolio reviews, and insider interview tips from our Career Services Team.",
  "<b>Code Review by Industry Experts:</b> Code to industry standards. Each line undergoes thorough review by pros from top tech companies.",
  "<b>On-Demand Expert Feedback:</b> Receive swift help from our experts. Message for timely, effective feedback to ensure efficient, error-free code.",
  "<b>Flexible Learning Environment:</b> Tailor learning to your lifestyle. Choose online/campus, full/part-time. Accessible tech education, your way.",
  "<b>Inclusive Tech Education:</b> Tech for all. Online/on-campus, full/part-time – equal access to tech careers is our commitment.",
];

const Features = ({ className }) => {

  const [localFeatures, setlocalFeatures] = useState([]);

  useEffect(() => {
    const cachedFeatures = localStorage.getItem("features");

    if (cachedFeatures) {
      setlocalFeatures(JSON.parse(cachedFeatures));
    } else {
      localStorage.setItem("features", JSON.stringify(defaultFeatures));
      setlocalFeatures(defaultFeatures);
    }
  }, []);

  return (
    <section className={className}>
      <Header
        title={"What Makes Us Unique"}
        subtitle={"Go From Novice to Industry-Ready"}
      />
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12} className="timeline-column">
          <Timeline mode="left" aria-label="Features Timeline">
            {localFeatures.map((item, index) => (
              <Timeline.Item
                key={index}
                dot={<div className="custom-timeline-dot"></div>}
              >
                <div dangerouslySetInnerHTML={{ __html: item }} />
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
