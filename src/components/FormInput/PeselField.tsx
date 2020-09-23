import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateHouseNumber, validatePesel } from './validate'

const PeselField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Pesel',
  placeholder = 'Pesel',
  name = 'id_code',
  required = true,
  validate = validatePesel,
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

export default PeselField
