import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateIDCardNumber } from './validate';

const IDCardNumberField = ({
  id,
  label = 'Numer dowodu osobistego',
  placeholder = 'Numer dowodu osobistego',
  name,
  required = false,
  validate = validateIDCardNumber,
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

IDCardNumberField.defaultProps = {
  name: 'id_card_number'
};
export default IDCardNumberField;
//# sourceMappingURL=IDCardNumberField.js.map