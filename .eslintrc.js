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
    indent: ["error", 2, {
      flatTernaryExpressions: true,
      SwitchCase: 1,
    }],
  },
}
  