module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    { targets: { node: "current" } },
  ],
  plugins: ["@babel/plugin-syntax-jsx"],
};