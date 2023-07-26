import { Container } from "@common/container";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-mintGreen py-6">
      <Container className="container mx-auto px-4">
        <p className="text-center font-montserratRegular">
          © {new Date().getFullYear()} VinToys. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
