import grayStar from "../../../assets/img/star_PNG41474 1.png";
import yellowStar from "../../../assets/img/star_PNG41474.png";
import React from "react";
import "./Stars.scss";

const Stars = ({ rating }) => {
  const total = [1, 2, 3, 4, 5];

  return (
    <div className="stars-container">
      {total.map((item, index) => {
        let width = 0;
        if (item < rating) {
          width = 100;
        } else if (item - rating < 1) {
          width = 100 - (item - rating) * 100;
        }

        return (
          <div className="star">
            <img className="star_gray-star" src={grayStar} alt="star" />
            <img
              key={index}
              style={{ width: width + "%" }}
              className="star_yellow-star"
              src={yellowStar}
              alt="star"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
