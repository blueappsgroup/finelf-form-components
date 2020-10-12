import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
import { validateSelect } from './validate';
const options = {
  yes: 'tak',
  no: 'nie'
};

const CarStatusField = ({
  id,
  label,
  name = 'car_status',
  required = false,
  validate,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options,
  validate: validate && validate(required) || validateSelect(required, options)
});

CarStatusField.defaultProps = {
  name: 'car_status'
};
export default CarStatusField;
//# sourceMappingURL=CarStatusField.js.map