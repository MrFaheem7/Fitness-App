import React from "react";
import "./GetStarted.scss";

function GetStarted() {
  return (
    <section className="get-started">
      <div className="text-section">
        <h2>Increase your revenue for free with FitConnect</h2>
        <p>
          List your business on ClassPass to reach thousands of new customers,
          fill unbooked spots and maximize your revenue.
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="right-section">
        <div className="person">
          <img src="/src/assets/images/increase-revenue.png" alt="Person" />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
