import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateTelNumber } from './validate';

const TelephoneField = ({
  id,
  label,
  placeholder = 'Telefon',
  errorMsg = 'Nie poprawny numer telefonu',
  name = 'telepone',
  required = false
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  id: id,
  name: name,
  component: BaseField,
  label: label,
  placeholder: placeholder,
  type: "tel",
  validate: validateTelNumber(errorMsg, required)
});

export default TelephoneField;
//# sourceMappingURL=TelephoneField.js.map