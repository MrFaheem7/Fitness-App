import React from 'react';
import './FindTrainer.scss';
import location from '../../assets/loc.png';
function FindTrainer() {
  return (
    <section className="find-trainer">
      <div className="text-section">
        <h2>Find the best Trainer in your Area</h2>
        <p>Find the best fitness trainer near you for personalized guidance and optimal results. Tailored to your goals and preferences, achieve the best version of yourself with expert support in your own area.</p>
        <button className="find-trainer-button">Find your Trainer</button>
      </div>
      <div className="map-section">
        <div className="map">
          <img src={loc} alt="Map" />
        </div>
      </div>
    </section>
  );
}

export default FindTrainer;
