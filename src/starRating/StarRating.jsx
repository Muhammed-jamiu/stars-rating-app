// StarRating.js
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Style.css";

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    setRating(index + 1);
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      const isActive = i < rating;
      const isHalf = i + 0.5 === rating;

      stars.push(
        <span
          key={i}
          className={`star ${isActive ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {isHalf ? <FaStarHalfAlt /> : isActive ? <FaStar /> : <FaRegStar />}
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
