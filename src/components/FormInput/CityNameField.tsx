import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateCityName } from './validate'

const CityNameField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Miasto',
  placeholder = 'Miasto',
  name = 'text_city',
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

export default CityNameField
