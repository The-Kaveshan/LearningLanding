import React from "react";
import { Card, Badge, Row, Col, Divider, Typography } from "antd";
import "./Courses.scss";
import Header from "../Header/Header";
const courses = [
  {
    title: "Certified Full Stack Web & Software Engineer bootcamp",
    description:
      "Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp.",
    length: "12 months part-time | 6 months full-time",
    category: "Online",
  },
  {
    title: "Software Engineer bootcamp",
    description:
      "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
    length: "6 months part-time | 3 months full-time",
    category: "Online",
  },
  {
    title: "Data Scientist bootcamp",
    description:
      "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
    length: "6 months part-time | 3 months full-time",
    category: "Online",
  },
  {
    title: "Full Stack Web Developer bootcamp",
    description:
      "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
    length: "6 months part-time | 3 months full-time",
    category: "Online",
  },
  {
    title:
      "Stellenbosch University Web Development Bootcamp in Partnership with HyperionDev",
    description:
      "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
    length: "6 months part-time | 3 months full-time",
    category: "University",
  },
  {
    title:
      "Stellenbosch University Software Engineering Bootcamp in Partnership with HyperionDev",
    description:
      "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
    length: "6 months part-time | 3 months full-time",
    category: "University",
  },
  {
    title:
      "Stellenbosch University Data Science Bootcamp in Partnership with HyperionDev",
    description:
      "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
    length: "6 months part-time | 3 months full-time",
    category: "University",
  },
  {
    title: "Software Engineer bootcamp",
    description:
      "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
    length: "3 months full-time",
    category: "On-Site",
  },
];

function Courses() {
  const { Paragraph, Text } = Typography;

  return (
    <div className="course-slider">
      <Header
        title={"Discover Your Ideal Course"}
        subtitle={"Embark on Your Learning Journey"}
      />
      <Row gutter={16}>
        {courses.map((course, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Badge.Ribbon
              text={course.category}
              color={
                course.category === "Online"
                  ? "blue"
                  : course.category === "University"
                  ? "green"
                  : course.category === "On-Site"
                  ? "orange"
                  : "gray"
              }
            >
              <Card bordered={false}>
                <h4>{course.title}</h4>
                <Divider />
                <p className={"course-text"}>{course.description}</p>
                <p className={"duration"}>{course.length}</p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Courses;
