import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldWithConditonProps } from '../../types'
import BaseField from './base'
import { validateCompanyTax } from './validate'

const CompanyTaxField: FC<TextFieldWithConditonProps> = ({
  id,
  label = 'NIP firmy',
  placeholder = 'NIP firmy',
  name = 'company_tax_id',
  required = false,
  validate = validateCompanyTax,
  showError = true,
  requiredCondition = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    employment_type: ['self_employed'],
  },
}) => (
  <Field
    id={id}
    label={label}
    placeholder={placeholder}
    component={BaseField}
    required={required}
    showError={showError}
    name={name}
    validate={validate}
    requiredCondition={requiredCondition}
  />
)

CompanyTaxField.defaultProps = {
  name: 'company_tax_id',
}

export default CompanyTaxField
