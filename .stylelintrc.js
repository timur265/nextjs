module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
  },
  ignoreFiles: ["!**/*.scss"],
};
