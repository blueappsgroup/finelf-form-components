import React, { FC } from 'react'
import { Field } from 'formik'

import { BaseDateField } from './base'
import { BirthDateFieldProps } from '../../types'
import { validateDate } from './validate'

const BirthDateField: FC<BirthDateFieldProps> = ({
  id,
  label,
  placeholder = 'Data urodzenia',
  name,
  required = false,
  showError = true,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    component={BaseDateField}
    name={name}
    label={label}
    placeholder={placeholder}
    validate={validateDate(required)}
  />
)

BirthDateField.defaultProps = {
  name: 'date_of_birth',
}

export default BirthDateField
