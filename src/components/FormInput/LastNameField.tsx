import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'

const LastNameField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Nazwisko',
  placeholder = 'Nazwisko',
  name = 'last_name',
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

export default LastNameField
