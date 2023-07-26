import React, { ReactNode } from "react";
import Footer from "@components/footer";
import Header from "@components/header";
import { headerLinks } from "@components/header/links";
import { Container } from "@common/container";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const menuLinks = headerLinks();

  return (
    <Container className="flex flex-col min-h-screen">
      <Header menu={menuLinks} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
