import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { BirthDateFieldProps } from '../../types'

const BirthDateField: FC<BirthDateFieldProps> = ({
  id,
  label,
  placeholder,
  name,
  required = false,
  showError = true,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseField}
    label={label}
    placeholder={placeholder}
    type="date"
  />
)

BirthDateField.defaultProps = {
  name: 'date_of_birth',
}

export default BirthDateField
