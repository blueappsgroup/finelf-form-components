import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateIncome } from './validate'
import { IncomeFieldProps } from '../../types'

const IncomeField: FC<IncomeFieldProps> = ({
  id,
  label,
  placeholder = 'Dochód',
  errorMsg = 'Podana kwota jest nieprawidłowa',
  name,
  required = false,
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
    validate={validateIncome(errorMsg, required)}
  />
)

IncomeField.defaultProps = {
  name: 'income',
}

export default IncomeField
