const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

module.exports = withTypescript(
  withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true
      },
      webpack(config, options) {
        config.resolve.alias["components"] = path.join(
          __dirname,
          "src/components"
        );
        config.resolve.alias["styles"] = path.join(__dirname, "src/styles");
        return config;
      }
    })
  )
);
