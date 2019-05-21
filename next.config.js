const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      config.resolve.alias['components'] = path.join(
        __dirname,
        'src/components'
      );
      config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');
      return config;
    }
  })
);
