import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../types'
import TextField from './TextField'
import { validateCompanyTax } from './validate'

const CompanyTaxField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'NIP firmy',
  placeholder = 'NIP firmy',
  name = 'company_tax_id',
  required = true,
  validate = validateCompanyTax,
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

export default CompanyTaxField
