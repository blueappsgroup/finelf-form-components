import React from 'react';
import { Field } from 'formik';
import { BaseRangeField } from './base';

const AmountField = ({
  id,
  label = 'Kwota pożyczki',
  name,
  required = false,
  showError,
  showMinMax = true
}) => /*#__PURE__*/React.createElement(Field, {
  required: required,
  showError: showError,
  showMinMax: showMinMax,
  id: id,
  name: name,
  component: BaseRangeField,
  label: label,
  type: "text",
  min: 300,
  max: 10000,
  step: 100,
  value: 2000,
  suffix: 'PLN',
  unit: 'zł'
});

AmountField.defaultProps = {
  name: 'amount'
};
export default AmountField;
//# sourceMappingURL=AmountField.js.map