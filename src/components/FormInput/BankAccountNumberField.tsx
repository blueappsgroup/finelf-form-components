import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateBankAccountNumber } from './validate'

const BankAccountNumberField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Numer konta bankowego',
  placeholder = 'Numer konta bankowego',
  name = 'bank_account_number',
  required = true,
  validate = validateBankAccountNumber,
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

export default BankAccountNumberField
