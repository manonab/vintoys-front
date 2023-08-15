import React from "react";
// import nextI18NextConfig from "../../next-i18next.config";
import "@styles/global.css";
import { AppProps } from "next/app";
import Layout from "@components/layout";
import { AuthProvider } from "@context/auth-context";
// import { appWithTranslation } from "next-i18next";

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
