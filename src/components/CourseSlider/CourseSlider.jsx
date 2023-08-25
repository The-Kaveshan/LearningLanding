import React, { useState } from "react";
import { Carousel, Card, Button, Badge } from "antd";
import "./CourseSlider.scss";

const courses = [
  {
    title: "Certified Full Stack Web & Software Engineer bootcamp",
    description:
      "Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp.",
    length: "12 months part-time | 6 months full-time",
    category: "Online Coding",
  },
  {
    title: "Software Engineer bootcamp",
    description:
      "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
    length: "6 months part-time | 3 months full-time",
    category: "Online Coding",
  },
  {
    title: "Data Scientist bootcamp",
    description:
      "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
    length: "6 months part-time | 3 months full-time",
    category: "Online Coding",
  },
  {
    title: "Full Stack Web Developer bootcamp",
    description:
      "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
    length: "6 months part-time | 3 months full-time",
    category: "Online Coding",
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
    category: "On-Site Courses",
  },
];

function CourseSlider() {
  const carouselRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = courses.length;

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="course-slider">
      <div className="header">
        <h3>Start learning</h3>
        <h1>Find Your Perfect Course</h1>
      </div>
      <div className="carousel-container">
        {currentSlide > 0 && (
          <button className="carousel-control prev" onClick={handlePrev}>
            ←
          </button>
        )}
        <Carousel
          ref={carouselRef}
          infinite={false}
          afterChange={handleAfterChange}
          autoplay={false}
          slidesToShow={4}
          responsive={[{ breakpoint: 768, settings: { slidesToShow: 1 } }]}
        >
          {courses.map((course) => (
            <div className="card-container">
              <Badge.Ribbon text={course.category}>
                <Card
                  className="course-card"
                  key={course.id}
                  title={course.title}
                >
                  <p>{course.description}</p>
                  <p>
                    <strong>Duration:</strong> {course.length}
                  </p>
                  <Button type="primary">View More</Button>
                </Card>
              </Badge.Ribbon>
            </div>
          ))}
        </Carousel>
        {currentSlide < totalSlides - 4 && (
          <button className="carousel-control next" onClick={handleNext}>
            →
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseSlider;
