import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Statistic, Row, Col, Typography } from "antd";
import Animate from "rc-animate";
import "./Facts.scss";
import Header from "../Header/Header";

const defaultFacts = [
  {
    title: "Expert Code Reviews",
    value: 100000,
    suffix: "+",
    description:
      "We've perfected the method of teaching tech skills by incorporating expert code review in all of our bootcamps. Get your code reviewed by experts from Day 1, so you can learn industry-grade practices.",
  },
  {
    title: "Hours of Support in 2023",
    value: 7400,
    suffix: "+",
    description:
      "Our students receive comprehensive support and feedback from an expert team of code reviewers while studying with us. Expert help is just a video call away.",
  },
  {
    title: "Reached Career Outcomes",
    value: 84,
    suffix: "%",
    description:
      "Most of our graduates end up reaching their career goals by finding a job or upskilling in the tech industry, while 80% of our grads secured a job within 6 months of graduating.",
  },
  {
    title: "High Student Satisfaction",
    value: 5,
    suffix: "/5",
    description:
      "With hundreds of 5-star reviews from our students and alumni, we're one of the top-rated tech education providers in the world.",
  },
];

const Facts = ({ className }) => {
  const { Text } = Typography;
  const formatter = (value) => <CountUp end={value} separator="," />;

  const factsRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [localFacts, setLocalFacts] = useState([]);

  useEffect(() => {
    const cachedFacts = localStorage.getItem("facts");

    if (cachedFacts) {
      setLocalFacts(JSON.parse(cachedFacts));
    } else {
      localStorage.setItem("facts", JSON.stringify(defaultFacts));
      setLocalFacts(defaultFacts);
    }
  }, []);

  useEffect(() => {
    const checkIfInView = () => {
      const rect = factsRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", checkIfInView);
    checkIfInView();
    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  return (
    <div
      className={className}
      role="region"
      aria-label="Facts and statistics"
      ref={factsRef}
    >
      <Header title={"An Experience That Transforms Lives"} subtitle={""} />
      <Animate transitionName="fade" transitionAppear>
        {inView && (
          <Row gutter={16} className="facts-stats">
            {localFacts.map((fact, index) => (
              <Col
                xs={24}
                sm={12}
                md={6}
                key={`facts-${index}`}
                role="group"
                aria-label={fact.title}
              >
                <Statistic
                  title={fact.title}
                  value={fact.value}
                  suffix={fact.suffix}
                  formatter={formatter}
                  aria-describedby={`fact-description-${index}`}
                />
                <Text id={`fact-description-${index}`}>{fact.description}</Text>
              </Col>
            ))}
          </Row>
        )}
      </Animate>
    </div>
  );
};

export default Facts;
