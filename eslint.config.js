import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      parser: astro.parser,
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
    },
  },
  {
    files: ['**/*.html'],
    plugins: { html },
  }
];
