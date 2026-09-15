import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "**/.next/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;
