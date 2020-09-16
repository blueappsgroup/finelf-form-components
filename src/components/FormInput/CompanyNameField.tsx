import React from 'react'
import TextField from './TextField'

const CompanyNameField = () => (
  <TextField
    required
    label="Nazwa pracodawcy"
    placeholder="Nazwa pracodawcy"
    showError
    name="company_name"
  />
)

export default CompanyNameField
