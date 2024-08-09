import React from 'react';
import { reviews } from '../../constants';
import ReviewCard from '../molecules/ReviewCard/ReviewCard';
import './Reviews.scss';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>Hear from our clients</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
