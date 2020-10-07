import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateHouseNumber } from './validate';

const HouseNumberField = ({
  id,
  label = 'Numer domu',
  placeholder,
  name,
  required = false,
  validate = validateHouseNumber,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  id: id,
  label: label,
  placeholder: placeholder,
  component: BaseField,
  required: required,
  showError: showError,
  name: name,
  validate: validate(required)
});

HouseNumberField.defaultProps = {
  name: 'house_number'
};
export default HouseNumberField;
//# sourceMappingURL=HouseNumberField.js.map