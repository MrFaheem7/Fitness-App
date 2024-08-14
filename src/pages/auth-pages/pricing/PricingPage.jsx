import React from "react";
import styles from "./PricingPage.module.scss";
import PlanCard from "../../../components/molecules/PlanCard/PlanCard";
import AppButton from "../../../components/atoms/button/button";
import FAQs from "../../../components/templates/FAQs";

const plans = [
  {
    price: "$50.00",
    frequency: "Monthly",
    details: "Charge card on file",
    buttonText: "Try for free",
  },
  {
    price: "$30.00",
    frequency: "Monthly",
    details: "Charge card on file",
    buttonText: "Try for free",
  },
  {
    price: "$40.00",
    frequency: "Monthly",
    details: "Charge card on file",
    buttonText: "Try for free",
  },
];

const PricingPage = () => {
  return (
    <>
      <div className={styles.pricingPage}>
        <div className={styles.topSection}>
          <h1>Pick a plan that works for you</h1>
          <p>
            Fitness and wellness aren’t one-size-fits-all, and neither are our
            memberships. Choose a plan that best fits your lifestyle
          </p>
          <AppButton>See the Plans</AppButton>
        </div>
        <div className={styles.bottomSection}>
          <h2>Available plans</h2>
          <p>14 free Day Trial and then charge card on file</p>
          <div className={styles.plansContainer}>
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                price={plan.price}
                frequency={plan.frequency}
                details={plan.details}
                buttonText={plan.buttonText}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <FAQs />
    </>
  );
};

export default PricingPage;
