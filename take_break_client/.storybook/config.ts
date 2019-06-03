import { configure, addParameters } from '@storybook/react';

addParameters({
  viewport: { defaultViewport: 'iphonex' },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' }
  ]
});

function loadStories() {
  // automatically import all files ending in *.tsx
  const req = require.context('../stories', true, /.tsx$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
