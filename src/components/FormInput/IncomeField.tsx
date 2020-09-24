import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateIncome } from './validate'
import { IncomeFieldProps } from '../../types'

const IncomeField: (props: IncomeFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Dochód',
  errorMsg = 'Podana kwota jest nieprawidłowa',
  name = 'income',
  required = false,
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
    validate={validateIncome(errorMsg, required)}
  />
)

export default IncomeField
