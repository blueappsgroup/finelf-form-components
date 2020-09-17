import React from 'react'
import TextField from './TextField'
import { validateCompanyTax } from './validate'

const CompanyNameField = () => (
  <TextField
    required
    label="NIP firmy"
    placeholder="NIP firmy"
    showError
    name="company_tax_id"
    validate={validateCompanyTax}
  />
)

export default CompanyNameField
