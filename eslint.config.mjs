import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ignores = [
  "src/emotion.d.ts",
  ".next",
  ".next/static/**/*",
  "_nuget",
  ".cache",
  "node_modules",
  "static",
  "public",
];

const compat = new FlatCompat({
  baseDirectory: __dirname,
  files: ["**/*.ts", "**/*.tsx"],
  ignores: ignores,
  plugins: { "unused-imports": unusedImports },
  rules: {
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": ["off"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
