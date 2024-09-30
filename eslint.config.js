import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      curly: "error",
      eqeqeq: "off",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-debugger": "warn",
      "no-else-return": "error",
      "lines-between-class-members": ["error", "always"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "multiline-const" },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "const", next: "export" },
        { blankLine: "always", prev: "multiline-block-like", next: "export" },
        { blankLine: "always", prev: "*", next: "multiline-expression" },
        { blankLine: "always", prev: "*", next: "if" },
        { blankLine: "always", prev: "multiline-expression", next: "*" },
        { blankLine: "always", prev: "if", next: "*" },
      ],
      "react/display-name": "off",
      "react/jsx-key": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
  {
    ignores: [
      "**/.next/",
      ".prettierrc.js",
      "**/*.config.js",
      "**/node_modules/",
    ],
  },
];
