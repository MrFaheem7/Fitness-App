import React from 'react';
import styles from './WhyChooseUs.module.scss';
import { cardData } from '../../constants';
import SectionHeader from '../atoms/section-header/section-header';


const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <SectionHeader
        title="Why Choose Us"
        subtitle="We are a team of fitness experts who are here to help you achieve your fitness goals"
      />
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
