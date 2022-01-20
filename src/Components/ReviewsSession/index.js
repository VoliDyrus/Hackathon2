import React, { useState } from "react";
import divisions from "../../Assets/hackaton.json";
import { motion } from "framer-motion";
import "./style.css";

const ReviewsSession = () => {
  const [reviews, setReviews] = useState(
    divisions.divisions.office[0].comments
  );

  return (
    <div>
      <div className="reviews-wrapper">
        <h3 className="review-title">Reviews</h3>
        <div className="reviews-holder">
          {reviews.map((review, index) => (
            <motion.div
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="reviews"
              key={review.user + index}
            >
              <h3 className="review-user"> {review.user}</h3>
              <h5 className="review-date">
                <em>{review.date}</em>
              </h5>
              <p>{review.text}</p>
              <br />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSession;
