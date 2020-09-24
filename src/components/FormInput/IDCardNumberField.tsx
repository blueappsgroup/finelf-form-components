import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateIDCardNumber } from './validate'

const IDCardNumberField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Numer dowodu osobistego',
  placeholder = 'Numer dowodu osobistego',
  name = 'id_card_number',
  required = true,
  validate = validateIDCardNumber,
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

export default IDCardNumberField
