import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateHouseNumber } from './validate'

const FirstNameField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Imię',
  placeholder = 'Imię',
  name = 'first_name',
  required = true,
  validate,
  showError = true,
}) => (
  <TextField
    id={id}
    label={label}
    placeholder={placeholder}
    required={required}
    showError={showError}
    name={name}
    validate={validate}
  />
)

export default FirstNameField
