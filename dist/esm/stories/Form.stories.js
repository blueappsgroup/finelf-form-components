import * as React from 'react';
import { Header, TextField, Button, CheckboxField, SubmitSuccessText, Form } from '../';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (values, props) => {
  console.log(props);
  console.log(values);
};

export default {
  title: 'Form',
  component: Form
};

const Template = args => /*#__PURE__*/React.createElement(Form, args, /*#__PURE__*/React.createElement(Header, {
  text: "Test title"
}), /*#__PURE__*/React.createElement(SubmitSuccessText, {
  text: "Dzi\u0119kujemy, twoje dane zosta\u0142y przes\u0142ane."
}), /*#__PURE__*/React.createElement(TextField, {
  required: true,
  showError: true,
  placeholder: "Name",
  name: "firstName"
}), /*#__PURE__*/React.createElement(TextField, {
  required: true,
  placeholder: "Surname",
  name: "lastName"
}), /*#__PURE__*/React.createElement(TextField, {
  placeholder: "City",
  name: "city"
}), /*#__PURE__*/React.createElement(Header, {
  text: "Test title",
  type: "subheader"
}), /*#__PURE__*/React.createElement(CheckboxField, {
  name: "agreement1",
  label: "Test agreement text"
}), /*#__PURE__*/React.createElement(CheckboxField, {
  name: "agreement2",
  label: "Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
}), /*#__PURE__*/React.createElement(Button, {
  text: "Send"
}));

export const Defualt = Template.bind({});
Defualt.args = {
  id: 'testForm',
  onSubmit
};
export const Custom = Template.bind({});
Custom.args = {
  id: 'testForm2',
  onSubmit,
  customTheme: {
    formBgColor: 'red'
  }
};
//# sourceMappingURL=Form.stories.js.map