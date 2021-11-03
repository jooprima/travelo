import React from "react";

import styles from "./Footer.module.css";
import traveloLogo from "public/assets/travelo-logo-footer.png";
import Container from "components/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={traveloLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height="98"
              width="136"
            />
          </figure>
        </div>
      </Container>

      <div className="bg-blue-100 p-3">
        <p className="text-heading-5 text-white font-bold text-center">
          Copyright 2021 Nama Brand. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
