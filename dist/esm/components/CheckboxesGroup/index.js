import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import CheckboxField from '../FormInput/CheckboxField';

const CheckboxesGroup = ({
  name,
  children
}) => {
  const {
    values,
    setValues
  } = useFormikContext();
  const hasManyCheckboxes = Array.isArray(children);
  const checkboxesNames = useMemo(() => hasManyCheckboxes ? children && children.map(item => item.props.name) : [children.props.name], [hasManyCheckboxes, children]);

  const handleOnChange = e => {
    const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
      acc[item] = e.target.value === 'true' ? false : true;
      return acc;
    }, {});
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: fieldsToUpdate
    }));
  };

  return /*#__PURE__*/React.createElement(FieldArray, {
    name: name,
    render: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxField, {
      id: `${name}.selectAll`,
      name: `${name}.selectAll`,
      label: "Zaznacz wszystkie zgody",
      onChange: handleOnChange
    }), children && !hasManyCheckboxes && /*#__PURE__*/React.createElement(CheckboxField, _extends({}, children.props, {
      name: `${name}.${children.props.name}`
    })), children && hasManyCheckboxes && children.map(item => /*#__PURE__*/React.createElement(CheckboxField, _extends({}, item.props, {
      key: item.props.name,
      name: `${name}.${item.props.name}`,
      id: `${name}.${item.props.name}`
    }))))
  });
};

CheckboxesGroup.propTypes = {
  name: _pt.string.isRequired,
  children: _pt.any.isRequired,
  groupType: _pt.string
};
CheckboxesGroup.defaultProps = {
  groupType: 'checkboxGroup'
};
export default CheckboxesGroup;
//# sourceMappingURL=index.js.map