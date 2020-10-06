/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'
import { validateSelect } from './validate'

const options = {
  unmarried: 'panna/kawaler',
  married: 'mężatka/żonaty',
  divorced: 'rozwiedziona/rozwiedziony',
  widower: 'wdowa/wdowiec',
  with_parents: 'z rodzicami',
}

const MaritalStatusField: FC<SelectFieldProps> = ({
  id,
  label,
  name = 'marital_status',
  required = false,
  validate,
  showError,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseSelectField}
    label={label}
    type="select"
    options={options}
    validate={
      (validate && validate(required)) || validateSelect(required, options)
    }
  />
)

MaritalStatusField.defaultProps = {
  name: 'amount_of_children',
}

export default MaritalStatusField
