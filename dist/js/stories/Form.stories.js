"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Custom = exports.Defualt = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ = require("../");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var onSubmit = function onSubmit(values, props) {
  console.log(props);
  console.log(values);
};

var _default = {
  title: 'Form',
  component: _.Form
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_.Form, args, /*#__PURE__*/React.createElement(_.Header, {
    text: "Test title"
  }), /*#__PURE__*/React.createElement(_.SubmitSuccessText, {
    text: "Dzi\u0119kujemy, twoje dane zosta\u0142y przes\u0142ane."
  }), /*#__PURE__*/React.createElement(_.TextField, {
    required: true,
    placeholder: "Name",
    name: "firstName"
  }), /*#__PURE__*/React.createElement(_.TextField, {
    required: true,
    placeholder: "Surname",
    name: "lastName"
  }), /*#__PURE__*/React.createElement(_.TextField, {
    placeholder: "City",
    name: "city"
  }), /*#__PURE__*/React.createElement(_.Header, {
    text: "Test title",
    type: "subheader"
  }), /*#__PURE__*/React.createElement(_.CheckboxField, {
    name: "agreement1",
    label: "Test agreement text"
  }), /*#__PURE__*/React.createElement(_.CheckboxField, {
    name: "agreement2",
    label: "Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text Test agreement text"
  }), /*#__PURE__*/React.createElement(_.Button, {
    text: "Send"
  }));
};

var Defualt = Template.bind({});
exports.Defualt = Defualt;
Defualt.args = {
  id: 'testForm',
  onSubmit: onSubmit
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.args = {
  id: 'testForm2',
  onSubmit: onSubmit,
  customTheme: {
    formBgColor: 'red'
  }
};
//# sourceMappingURL=Form.stories.js.map