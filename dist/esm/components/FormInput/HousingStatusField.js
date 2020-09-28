/* eslint-disable @typescript-eslint/camelcase */
import { Field } from 'formik';
import React from 'react';
import { BaseSelectField } from './base';
const options = {
  propety: 'mieszkanie własne',
  with_parent: 'mieszkanie rodziców',
  rental: 'mieszkanie wynajmowane',
  room: 'pokój'
};

const HousingStatusField = ({
  id,
  label,
  name = 'housing_status',
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

export default HousingStatusField;
//# sourceMappingURL=HousingStatusField.js.map