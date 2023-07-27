import { Container } from "@common/container";
import Text, { Align, Size } from "@common/text";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-silver py-10 h-[150px]">
      <Container className="container mx-auto px-4">
        <Text
          text={`© ${new Date().getFullYear()} Vintoys. All rights reserved.`}
          textAlign={Align.Center}
          size={Size.XSMall}
        />
      </Container>
    </footer>
  );
};

export default Footer;
