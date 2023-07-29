import React from "react";
import "@styles/global.css";
import { AppProps } from "next/app";
import Layout from "@components/layout";
import { AuthProvider } from "@context/auth-context";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default MyApp;
