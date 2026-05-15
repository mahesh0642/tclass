//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  arrowParens: "avoid",

  plugin: ["prettier-plugin-tailwindcss"],
};

export default config;
