import React, { ReactNode } from "react";
import Footer from "@components/footer";
import Header from "@components/header";
import { Container } from "@common/container";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container className="flex flex-col min-h-screen bg-mainColor">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
