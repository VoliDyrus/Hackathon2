import React, { useState } from "react";
import divisions from "../../Assets/hackaton.json";

const ReviewsSession = () => {
  const [reviews, setReviews] = useState([
    divisions.divisions.office[0].comments,
  ]);
  console.log(reviews);
  return (
    <div className="reviews-holder" style={{ display: "block" }}>
      {reviews.map((review, index) => (
        <div key={review.user + index}>
          <h4>
            {review.date} {review.user}
          </h4>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSession;
