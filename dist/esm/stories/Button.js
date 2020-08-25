import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import './button.css';
import Button2 from '../components/Button';

/**
 * Primary UI component for user interaction
 */
export const Button = (_ref) => {
  let {
    primary = false,
    size = 'medium',
    backgroundColor,
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, ["primary", "size", "backgroundColor", "label"]);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['storybook-button', `storybook-button--${size}`, mode].join(' '),
    style: {
      backgroundColor
    }
  }, props), label), /*#__PURE__*/React.createElement(Button2, {
    text: "Sdasdas"
  }));
};
Button.propTypes = {
  primary: _pt.bool,
  backgroundColor: _pt.string,
  size: _pt.oneOf(['small', 'medium', 'large']),
  label: _pt.string.isRequired,
  onClick: _pt.func
};
//# sourceMappingURL=Button.js.map