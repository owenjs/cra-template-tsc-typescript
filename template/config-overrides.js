// config-overrides.js
// https://github.com/timarney/react-app-rewired

const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    if (env === "development") {
      config.plugins.push(
        new StylelintPlugin({
          files: "./src/**/*.{css,sass,scss}",
          fix: true
        })
      );
    }

    return config;
  }
  // jest: function(config) {
  //   // customize jest here
  //   return config;
  // },
  // devServer: function(configFunction) {
  //   return function(proxy, host) {
  //     // customize devServer config here
  //     return config;
  //   }
  // },
  // paths: function(paths, env) {
  //   // The paths config to use when compiling your react app for development or production.
  //   return paths;
  // },
};
