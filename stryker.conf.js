/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/vuejs",
  testRunner: "jest",
  mutator: {
    plugins: [],
  },
  jest: {},
  mutate: ['*.vue'],
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
};
