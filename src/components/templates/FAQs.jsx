import React from "react";
import { Collapse } from "antd";
import "./FAQs.scss";
import { items } from "../../constants";
import SectionHeader from "../atoms/section-header/section-header";
const { Panel } = Collapse;

const FAQs = () => {
  return (
    <section className="faqs">
     <SectionHeader title="FAQs" />
      <Collapse className="faq-collapse" expandIconPosition="right">
        {items.map((item) => (
          <Panel
            className="faq-panel"
            header={
              <div className="header-content">
                <img src="/src/assets/icons/tools-icons/double-qoute.svg" alt="" className="quote-icon" />
                <span className="header-text-content">{item.title}</span>
              </div>
            }
            key={item.key}
          >
            <p className="subtext">{item.content}</p>
          </Panel>
        ))}
      </Collapse>
    </section>
  );
};

export default FAQs;
