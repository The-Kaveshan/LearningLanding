import React from "react";
import { Card, Avatar, Typography, Carousel } from "antd";
import "./Review.scss";
import Header from "../Header/Header";
import { StarFilled } from "@ant-design/icons";

import Amy from "../../assets/images/reviews/Amy.jpg";
import Simphiwe from "../../assets/images/reviews/Simphiwe.jpg";
import Busisiwe from "../../assets/images/reviews/Busisiwe.jpg";
import Evan from "../../assets/images/reviews/Evan.jpg";
import Robin from "../../assets/images/reviews/Robin.jpg";

const Review = ({ className }) => {
  const { Text } = Typography;
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
      text: " I started with almost zero knowledge in coding, and now I'm proud to say I'm working at a top tech company as a junior developer.",
    },
  ];
  return (
    <div className={className}>
      <Header
        title={"Inspiring Tales of Tomorrow's Visionaries"}
        subtitle={""}
      />
      <div className="carousel-container">
        <Carousel
          dots
          draggable
          slidesToShow={4}
          autoplay
          infinite
          responsive={[
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
          ]}
        >
          {reviews.map((review) => (
            <div className="slide" key={review.id}>
              <Card className="review-card">
                <Text className="review-text">{`"${review.text}"`}</Text>
                <Avatar size={100} src={review.image} />
                <h4>{review.name}</h4>
                <div class="star-cont">
                  <StarFilled />
                  {review.rating}
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
