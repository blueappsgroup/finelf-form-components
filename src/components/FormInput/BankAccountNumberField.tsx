import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateBankAccountNumber } from './validate'

const BankAccountNumberField: FC<TextFieldProps> = ({
  id,
  label = 'Numer konta bankowego',
  placeholder,
  name,
  required = false,
  validate = validateBankAccountNumber,
  showError = true,
}) => (
  <Field
    id={id}
    label={label}
    placeholder={placeholder}
    component={BaseField}
    required={required}
    showError={showError}
    name={name}
    validate={validate(required)}
  />
)

BankAccountNumberField.defaultProps = {
  name: 'bank_account_number',
}

export default BankAccountNumberField
