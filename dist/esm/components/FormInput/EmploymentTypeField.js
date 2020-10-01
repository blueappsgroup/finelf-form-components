/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Field } from 'formik';
import { BaseSelectField } from './base';
const options = {
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'wdowa/wdowiec',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło'
};

const EmploymentTypeField = ({
  id,
  label,
  name,
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

EmploymentTypeField.defaultProps = {
  name: 'employment_type'
};
export default EmploymentTypeField;
//# sourceMappingURL=EmploymentTypeField.js.map