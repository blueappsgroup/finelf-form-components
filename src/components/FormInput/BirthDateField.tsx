import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { BirthDateFieldProps } from '../../types'

const BirthDateField: (props: BirthDateFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'BirthDate',
  errorMsg = 'Podana data urodzenia jest nieprawidłowa',
  name = 'date_of_birth',
  required = false,
  showError,
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

export default BirthDateField
