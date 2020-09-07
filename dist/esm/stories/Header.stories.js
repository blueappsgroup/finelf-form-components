import * as React from 'react';
import { Header } from '../';
export default {
  title: 'Header',
  component: Header
};

const Template = args => /*#__PURE__*/React.createElement(Header, args);

export const Defualt = Template.bind({});
Defualt.args = {
  text: 'Text'
};
export const Subheader = Template.bind({});
Subheader.args = {
  text: 'Subheader',
  type: 'subheader'
};
//# sourceMappingURL=Header.stories.js.map