import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node, 
      ecmaVersion: 2021, 
    },
    rules: {
      "no-unused-vars": "warn", 
      "no-console": "off", 
      semi: ["error", "always"], 
      quotes: ["error", "double"], 
      eqeqeq: "error", 
      "no-implicit-globals": "error", 
      "no-prototype-builtins": "error", 
      "consistent-return": "error", 
    },
  },
  {
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
];
