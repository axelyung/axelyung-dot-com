module.exports = {
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`, `prettier`],
  extends: [
    `eslint:recommended`,
    `airbnb`,
    `airbnb/hooks`,
    `plugin:prettier/recommended`,
  ],
  rules: {
    quotes: [2, `backtick`],
    'prettier/prettier': [2, { singleQuote: true }],
    'react/jsx-filename-extension': [1, { extensions: [`.tsx`] }],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
  },
};
