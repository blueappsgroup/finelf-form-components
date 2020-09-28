import { Field } from 'formik';
import React from 'react';
import { BaseSelectField } from './base';
const options = {
  yes: 'tak',
  no: 'nie'
};

const CarStatusField = ({
  id,
  label,
  name = 'car_status',
  required = false,
  showError
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseSelectField,
  label: label,
  type: "select",
  options: options
});

export default CarStatusField;
//# sourceMappingURL=CarStatusField.js.map