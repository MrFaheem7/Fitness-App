import React from "react";
import PropTypes from "prop-types";
import "./ExpertCard.scss";
import StarRating from "../../atoms/stars/stars";

function ExpertCard({ expert }) {
  const { name, title, speciality, rating, image } = expert;
  return (
    <div className="expert-card">
      <img src={image} alt={name} className="expert-image" />
      <div className="flex-between">
        <h3 className="expert-name">{name}</h3>
         <StarRating rating={rating} />
      </div>
      <p className="expert-title">{title}</p>
      <p className="expert-speciality">
        <strong>Speciality:</strong> {speciality}
      </p>
    </div>
  );
}

ExpertCard.propTypes = {
  expert: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
ExpertCard.defaultProps = {
  expert: {
    name: "John Doe",
    title: "Fitness Trainer",
    speciality: "Weight Loss",
    rating: 4,
    image: "/src/assets/images/trainer-1.jpeg",
  },
};
export default ExpertCard;
