import React, { useState, useEffect, useRef } from "react";
import { Card, Avatar, Rate, Typography } from "antd";
import "./Review.scss";
import Header from "../Header/Header";

import Amy from "../../assets/images/reviews/Amy.jpg";
import Simphiwe from "../../assets/images/reviews/Simphiwe.jpg";
import Busisiwe from "../../assets/images/reviews/Busisiwe.jpg";
import Evan from "../../assets/images/reviews/Evan.jpg";
import Robin from "../../assets/images/reviews/Robin.jpg";

const Review = ({className}) => {
  const { Title, Text } = Typography;
  const reviews = [
    {
      id: 1,
      name: "Amy",
      image: Amy,
      rating: 5,
      text: "The experience was phenomenal! The instructors were knowledgeable, and the course structure was well-curated. Highly recommend!",
    },
    {
      id: 2,
      name: "Simphiwe",
      image: Simphiwe,
      rating: 4,
      text: "I learned so much in such a short time. The projects were challenging but very enlightening. Could use a bit more material on advanced topics.",
    },
    {
      id: 3,
      name: "Busisiwe",
      image: Busisiwe,
      rating: 4.5,
      text: "A well-paced course with a good balance of theory and practical exercises. I feel ready to tackle real-world problems now.",
    },
    {
      id: 4,
      name: "Robin",
      image: Robin,
      rating: 5,
      text: "Absolutely worth it! The support from mentors and the community is fantastic. Can’t wait for the next advanced course!",
    },
    {
      id: 5,
      name: "Evan",
      image: Evan,
      rating: 4.5,
      text: "The bootcamp was transformative for me. I started with almost zero knowledge in coding, and now I'm proud to say I'm working at a top tech company as a junior developer. The guidance, support, and real-world projects were beyond my expectations!",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  // const reviewRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (reviewRef.current) {
  //       const rect = reviewRef.current.getBoundingClientRect();
  //       if (rect.top <= window.innerHeight && rect.bottom >= 0) {
  //         setIsVisible(true);
  //         // Remove event listener once the element is in view
  //         window.removeEventListener("scroll", handleScroll);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className={className}>
      <Header
        title={"Inspiring Tales of Tomorrow's Visionaries"}
        subtitle={""}
      />
      {/* <div
        className={`reviews-container ${isVisible ? "fadeIn" : ""}`}
        ref={reviewRef}
      > */}
        {reviews.map((review) => (
          <Card key={review.id} className="review-card">
            <Avatar size={100} src={review.image} />
            <Title level={3}>{review.name}</Title>
            <Rate
              allowHalf
              value={review.rating}
              disabled
              className="ant-rate"
            />
            <Text>{review.text}</Text>
          </Card>
        ))}
      </div>
    // </div>
  );
};

export default Review;
