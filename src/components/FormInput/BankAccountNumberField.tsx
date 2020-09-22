import React from 'react'
import TextField from './TextField'
import { validateBankAccountNumber } from './validate'

const BankAccountNumberField = () => (
  <TextField
    required
    label="Numer konta bankowego"
    placeholder="Numer konta bankowego"
    showError
    name="bank_account_number"
    validate={validateBankAccountNumber}
  />
)

export default BankAccountNumberField
