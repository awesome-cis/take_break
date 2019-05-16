import { configure, addParameters } from "@storybook/react";

addParameters({ viewport: { defaultViewport: "iphonex" } });

function loadStories() {
  // automatically import all files ending in *.tsx
  const req = require.context("../stories", true, /.tsx$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
