import React, { useState } from "react";
import divisions from "../../Assets/hackaton.json";
import reviewScore from "./image17.png";
import reviewComments from "./image18.png";

const ReviewsSession = () => {
  const [reviews, setReviews] = useState(
    divisions.divisions.office[0].comments
  );
  console.log(reviews);
  return (
    <div className="reviews-holder" style={{ display: "block" }}>
      {reviews.map((review, index) => (
        <div key={review.user + index}>
          <h4>
            {review.date || "Hello"} {review.user}
          </h4>
          <p>
            {review.text ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit."}
          </p>
          <br />
        </div>
      ))}
      <img src={reviewScore} alt="score" width="100%" />
      <div className="comments-wrapper">
        <img src={reviewComments} alt="score" width="60%" />
      </div>
    </div>
  );
};

export default ReviewsSession;
