import React from "react";

import Container from "components/Container";
import styles from "./SecondSection.module.css";
import PromoCarousel from "./PromoCarousel";
import "react-multi-carousel/lib/styles.css";

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <PromoCarousel />
      </Container>
    </section>
  );
};

export default SecondSection;
