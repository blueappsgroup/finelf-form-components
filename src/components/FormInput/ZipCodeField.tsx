import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateZipCode } from './validate'

const ZipCodeField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Kod pocztowy',
  placeholder = 'Kod pocztowy',
  name = 'text_zip',
  required = true,
  validate = validateZipCode,
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

export default ZipCodeField
