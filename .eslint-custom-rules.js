module.exports = {
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    indent: ["error", 2],
    "key-spacing": ["error"],
    "lines-between-class-members": ["error", "always"],
    "max-len": ["error", { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-useless-rename": "error", // чёт не работает
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],
    "prefer-destructuring": ["error"],
    semi: ["error", "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],

    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/type-annotation-spacing": ["error", { after: true }],
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/space-infix-ops": "error",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: "app",
        style: "camelCase",
      },
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: "app",
        style: "kebab-case",
      },
    ],
  },
};
