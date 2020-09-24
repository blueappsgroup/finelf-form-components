import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { OtherLoanAmountFieldProps } from '../../types'
import { validateOtherLoanAmount } from './validate'

const OtherLoanAmountField: (
  props: OtherLoanAmountFieldProps
) => ReactElement = ({
  id,
  label,
  placeholder = 'Kwota obecnych zobowiązań finansowych',
  errorMsg = 'Podany kwota jest nieprawidłowa',
  name = 'other_loans_amount',
  required = false,
  validate,
  showError,
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
    validate={
      (validate && validate(required)) ||
      validateOtherLoanAmount(errorMsg, required)
    }
  />
)

export default OtherLoanAmountField
