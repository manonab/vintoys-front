import Text, { Align, Size } from "@common/text";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-footerColor py-10 h-[180px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <a href="/about" className="text-white text-xs mr-4 font-baumans text-XSMall">
              About Us
            </a>
            <a
              href="/contact"
              className="text-white text-xs mr-4 font-baumans text-XSMall"
            >
              Contact Us
            </a>
          </div>
          <Text
            color="text-white"
            text={`© ${new Date().getFullYear()} Capiche. All rights reserved.`}
            textAlign={Align.Center}
            size={Size.XSMall}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
