import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'

const CompanyNameField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
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

export default CompanyNameField
