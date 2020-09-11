function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import CheckboxField from '../FormInput/CheckboxField';

const CheckboxesGroup = ({
  name,
  children
}) => {
  const {
    setValues
  } = useFormikContext();
  const hasManyCheckboxes = Array.isArray(children);
  const checkboxesNames = hasManyCheckboxes ? children.map(item => item.props.name) : [children.props.name];

  const handleOnChange = ({
    target: {
      value
    }
  }) => {
    const fieldsToUpdate = checkboxesNames.reduce((acc, item) => {
      acc[`${item}`] = !!value;
      return acc;
    }, {});
    setValues({
      [name]: fieldsToUpdate
    });
  };

  return /*#__PURE__*/React.createElement(FieldArray, {
    name: name,
    render: arrayHelpers => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CheckboxField, {
      id: `${name}.selectAll`,
      name: `${name}.selectAll`,
      label: "Select all",
      onChange: handleOnChange
    }), children && !hasManyCheckboxes && /*#__PURE__*/React.createElement(CheckboxField, _extends({}, children.props, {
      name: `${name}.${children.props.name}`
    })), children && hasManyCheckboxes && children.map(item => /*#__PURE__*/React.createElement(CheckboxField, _extends({}, item.props, {
      key: item.props.name,
      name: `${name}.${item.props.name}`
    }))))
  });
};

export default CheckboxesGroup;
//# sourceMappingURL=index.js.map