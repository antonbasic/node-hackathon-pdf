module.exports = {
  extends: "standard",
  plugins: [
    "standard",
    "promise",
  ],
  env: {
    jest: true,
  },
  rules: {
    'comma-dangle': ["error", "always-multiline"],
    "space-before-function-paren": ["error", "always"],
    indent: ["error", 2, {
      flatTernaryExpressions: true,
      SwitchCase: 1,
    }],
  },
}
