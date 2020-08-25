import React from 'react'; // also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Header } from './Header';
export default {
  title: 'Example/Header',
  component: Header
};

const Template = args => /*#__PURE__*/React.createElement(Header, args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map