import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateHouseNumber } from './validate';

const ApartmentNumberField = ({
  id,
  label = 'Numer mieszkania',
  placeholder = 'Numer mieszkania',
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

ApartmentNumberField.defaultProps = {
  name: 'apartment_number'
};
export default ApartmentNumberField;
//# sourceMappingURL=ApartmentNumberField.js.map