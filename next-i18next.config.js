/** @type {import('next-i18next').UserConfig} */
const path = require("path");
const localePath = path.resolve("./public/locales");

module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
  },
  localePath,
};
