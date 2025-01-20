/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    // https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting
    // eslintでformat系のエラー出さないようにする
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-for-template-key-on-child": "off",
  },
};
