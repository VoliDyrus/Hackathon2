import React, { useState } from "react";
import divisions from "../../Assets/hackaton.json";

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
    </div>
  );
};

export default ReviewsSession;
