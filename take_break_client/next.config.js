const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

module.exports = withTypescript(
  withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true
      },
      webpack(config, options) {
        const aliases = ['agent', 'components', 'store', 'styles'].reduce(
          (r, v) => {
            r[v] = path.join(__dirname, `src/${v}`);
            return r;
          },
          {}
        );

        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          ...aliases
        };
        return config;
      }
    })
  )
);
