import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { OtherLoanAmountFieldProps } from '../../types'
import { validateOtherLoanAmount } from './validate'

const OtherLoanAmountField: FC<OtherLoanAmountFieldProps> = ({
  id,
  label,
  placeholder = 'Kwota obecnych zobowiązań finansowych',
  errorMsg = 'Podany kwota jest nieprawidłowa',
  name,
  required = false,
  validate = validateOtherLoanAmount,
  showError = true,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseField}
    label={label}
    placeholder={placeholder}
    type="text"
    suffix={'PLN'}
    validate={validate(errorMsg, required)}
  />
)

OtherLoanAmountField.defaultProps = {
  name: 'other_loans_amount',
}

export default OtherLoanAmountField
