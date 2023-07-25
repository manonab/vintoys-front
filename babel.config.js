const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  ignore: ["node_module"],
  presets: [
    [
      "next/babel",
      {
        "preset-env": {
          modules: isTest ? "commonjs" : false,
        },
        "transform-runtime": {},
        "styled-jsx": {},
        "class-properties": {},
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@components": "./src/components",
          "@actions": "./src/actions",
          "@helpers": "./src/helpers",
          "@models": "./src/models",
          "@hooks": "./src/hooks",
          "@kommon": "./src/kommon",
          "@pages": "./src/pages",
          "@assets": "./public/static/assets",
          "@content": "./src/content",
        },
      },
    ],
    ["inline-react-svg"],
  ],
};
