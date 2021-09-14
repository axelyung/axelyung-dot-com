module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    indent: [2, 2],
  },
};
