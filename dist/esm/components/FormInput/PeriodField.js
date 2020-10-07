import React from 'react';
import { Field } from 'formik';
import { BaseRangeField } from './base';

const PeriodField = ({
  id,
  label = 'Okres spłaty',
  name,
  required = false,
  showError = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  id: id,
  name: name,
  component: BaseRangeField,
  label: label,
  type: "text",
  min: 3,
  max: 60,
  step: 1,
  value: 12,
  suffix: 'Dni',
  unit: 'Dni'
});

PeriodField.defaultProps = {
  name: 'application_period'
};
export default PeriodField;
//# sourceMappingURL=PeriodField.js.map