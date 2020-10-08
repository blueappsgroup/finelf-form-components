import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateCompanyTax } from './validate'

const CompanyTaxField: FC<TextFieldProps> = ({
  id,
  label = 'NIP firmy',
  placeholder = 'NIP firmy',
  name,
  required = false,
  validate = validateCompanyTax,
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

CompanyTaxField.defaultProps = {
  name: 'company_tax_id',
}

export default CompanyTaxField
