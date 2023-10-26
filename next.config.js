/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
