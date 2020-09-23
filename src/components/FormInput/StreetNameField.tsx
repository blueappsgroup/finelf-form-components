import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateCityName } from './validate'

const StreetNameField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Ulica',
  placeholder = 'Ulica',
  name = 'street',
  required = true,
  validate = validateCityName,
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

export default StreetNameField
