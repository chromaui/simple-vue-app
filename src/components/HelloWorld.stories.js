import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HelloWorld from './HelloWorld.vue';

storiesOf('HelloWorld', module)
  .add('story as a component', () => ({
    components: { HelloWorld },
    template: '<HelloWorld msg="This is a story!"/>'
  }));
