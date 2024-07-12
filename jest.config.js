module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
};
