const withTM = require("next-transpile-modules")(["@incoguzz/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
