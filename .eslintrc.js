module.exports = {
  root: true,
  extends: ["prettier", "plugin:jest/recommended"],
  parser: "babel-eslint",
  rules: {
    allowEmptyReject: [0],
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      },
      "babel-module": {}
    }
  },
  plugins: ["prettier", "jest"]
};
