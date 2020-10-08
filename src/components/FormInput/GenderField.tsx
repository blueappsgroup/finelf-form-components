import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'
import { validateSelect } from './validate'

const options = {
  male: 'mężczyzna',
  female: 'kobieta',
}

const GenderField: FC<SelectFieldProps> = ({
  id,
  label,
  name,
  required = false,
  validate,
  showError = true,
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

GenderField.defaultProps = {
  name: 'gender',
}

export default GenderField
