import React, { useEffect, useRef } from "react";
import "./ScrollableHero.scss";
import { goals, images } from "../../constants";

const HeroSection = () => {
  const imageContainerRef = useRef(null);


  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollAmount >= imageContainer.scrollHeight - imageContainer.clientHeight) {
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
      }
      imageContainer.scrollTop = scrollAmount;
    };

    const interval = setInterval(autoScroll, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="left-panel">
        <h1>Tailored Training, Anytime, Anywhere</h1>
        <p>
          FitConnect is the ultimate platform linking certified fitness
          professionals with clients eager to achieve their fitness goals.
        </p>
        <form className="goals-form">
          {goals.map((goal, index) => (
            <label key={index}>
              <input type="checkbox" name="goals" value={goal.value} />
              {goal.label}
            </label>
          ))}
          <button type="submit">Continue</button>
        </form>
      </div>
      <div className="right-panel" ref={imageContainerRef}>
        <div className="image-container">
          {images.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
