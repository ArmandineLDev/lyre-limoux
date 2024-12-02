import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import ts from "typescript-eslint";
import prettierConfigRecommended from "eslint-plugin-prettier/recommended";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import babelParser from "babel-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const patchedConfig = fixupConfigRules([...compat.extends("next/core-web-vitals")]);

export default [
    ...patchedConfig,
    ...ts.configs.recommended,
    prettierConfigRecommended,
    ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
)), {
    plugins: {},

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: 2021,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",

        "react/jsx-filename-extension": [1, {
            extensions: [".js", ".jsx"],
        }],

        "prettier/prettier": ["error", {}, {
            usePrettierrc: true,
        }],
    },
    },
{ignores: [".next/*"]}
];