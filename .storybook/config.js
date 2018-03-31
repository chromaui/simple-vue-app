import { configure, getStorybook } from '@storybook/vue';
import addons from '@storybook/addons';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);