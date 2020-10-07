import React from 'react';
import { Field } from 'formik';
import BaseField from './base';
import { validateZipCode } from './validate';

const ZipCodeField = ({
  id,
  label = 'Kod pocztowy',
  placeholder,
  name,
  required = false,
  validate = validateZipCode,
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

ZipCodeField.defaultProps = {
  name: 'text_zip'
};
export default ZipCodeField;
//# sourceMappingURL=ZipCodeField.js.map