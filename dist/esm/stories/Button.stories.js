import React from 'react'; // also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Button } from './Button';
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};

const Template = args => /*#__PURE__*/React.createElement(Button, args);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};
//# sourceMappingURL=Button.stories.js.map