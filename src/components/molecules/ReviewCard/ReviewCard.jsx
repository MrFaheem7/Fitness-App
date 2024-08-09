import React from "react";
import PropTypes from "prop-types";
import "./ReviewCard.scss";
import StarRating from "../../atoms/stars/stars";
import Avatar from "../../atoms/avatar/avatar";

const ReviewCard = ({ name, image, review, rating }) => {
  return (
    <div className="client-review">
      <div className="header-container">
        <Avatar image={image} name={name} />
        <h3>{name}</h3>
      </div>
      <StarRating rating={rating} />
      <p>{review}</p>
      <a href="#">See More</a>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
ReviewCard.defaultProps = {
  name: "John Doe",
  image: "/src/assets/images/avatar.png",
  review: "Great experience with this trainer",
  rating: 5,
};
export default ReviewCard;
