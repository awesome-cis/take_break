const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

module.exports = withTypescript(
  withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    })
  )
);
