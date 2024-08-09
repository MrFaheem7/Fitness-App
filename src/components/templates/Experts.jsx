import React from "react";
import "./Experts.scss";
import ExpertCard from "../molecules/ExpertCard/ExpertCard";
import { experts } from "../../constants";
import SectionHeader from "../atoms/section-header/section-header";

function Experts() {
  return (
    <section className="expert">
      <SectionHeader
        title="Meet our experts"
        subtitle="Find the perfect fitness trainer tailored to your goals and preferences"
      />
      <div className="experts-container">
        {experts.map((expert, index) => (
          <ExpertCard key={index} expert={expert} />
        ))}
      </div>
    </section>
  );
}

export default Experts;
