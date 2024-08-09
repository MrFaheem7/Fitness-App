import React from 'react';
import './FitnessJourney.scss';
import backgroundImage from '../../assets/images/fitness-journey.png'; // Update the path to your image

const FitnessJourney = () => {
  return (
    <div className="fitness-journey" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Start your fitness journey</h1>
        <p>
          Ready for a fitness journey that's all about you? Join FitConnect and experience truly personalized fitness.
          Let's build a stronger, healthier, and more confident version of you, together.
        </p>
        <button>Get my personalized plan</button>
      </div>
    </div>
  );
}

export default FitnessJourney;
