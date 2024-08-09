import React from "react";
import Experts from "../../components/templates/Experts";
import FAQs from "../../components/templates/FAQs";
import FindTrainer from "../../components/templates/FindTrainer";
import FitnessJourney from "../../components/templates/FitnessJourney";
import GetStarted from "../../components/templates/GetStarted";
import Hero from "../../components/templates/Hero";
import HowItWorks from "../../components/templates/HowItWorks";
import Reviews from "../../components/templates/Reviews";
import WhyChooseUs from "../../components/templates/WhyChooseUs";
import HeroSection from "../../components/templates/ScrollableHero";

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <HeroSection /> */}
      <WhyChooseUs />
      <FitnessJourney />
      <HowItWorks />
      <Experts />
      <FindTrainer />
      <GetStarted />
      <Reviews />
      <FAQs />
    </>
  );
};

export default LandingPage;
