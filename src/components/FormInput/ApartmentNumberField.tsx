import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateHouseNumber } from './validate'

const ApartmentNumberField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Numer mieszkania',
  placeholder = 'Numer mieszkania',
  name = 'apartment_number',
  required = true,
  validate = validateHouseNumber,
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

export default ApartmentNumberField
