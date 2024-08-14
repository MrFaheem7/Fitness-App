import React from "react";
import styles from "./PlanCard.module.scss";

import { CaretRightOutlined } from "@ant-design/icons";

import { Collapse, theme } from "antd";

const PlanCard = ({ price, frequency, details, buttonText, index }) => {
  const { token } = theme.useToken();

  const panelStyle = {
    border: "none",
    
  };
  const text = `
 Choose Plan that best fits your lifestyle
`;

  const getItems = [
    {
      key: "1",
      label: "Charge card on file 1",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: "Charge card on file 2",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "Charge card on file 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];

  const isMiddleCard = index === 1;
  return (
    <div
      className={`${styles.planCard} ${isMiddleCard ? styles.middleCard : ""}`}
    >
      <h3>{frequency}</h3>
      <p className={styles.price}>{price}</p>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} className="" />
        )}
        style={{ background: token.colorBgContainer }}
        items={getItems}
      />
      <button className={styles.planButton}>{buttonText}</button>
    </div>
  );
};

export default PlanCard;
