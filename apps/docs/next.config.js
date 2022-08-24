const withTM = require("next-transpile-modules")(["@unocssc/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
