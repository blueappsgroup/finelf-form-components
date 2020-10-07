import React, { FC } from 'react'
import { Field } from 'formik'

import { BaseDateField } from './base'
import { BirthDateFieldProps } from '../../types'

const BirthDateField: FC<BirthDateFieldProps> = ({
  id,
  label,
  placeholder = 'BirthDate',
  name,
  required = false,
  showError,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseDateField}
    label={label}
    placeholder={placeholder}
  />
)

BirthDateField.defaultProps = {
  name: 'date_of_birth',
}

export default BirthDateField
