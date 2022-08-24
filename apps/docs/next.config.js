const withTM = require("next-transpile-modules")(["@unocss/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
