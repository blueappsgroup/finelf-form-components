import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateAmountOfChildren } from './validate'
import { AmountOfChildrenFieldProps } from '../../types'

const AmountOfChildrenField: FC<AmountOfChildrenFieldProps> = ({
  id,
  label,
  placeholder = 'Liczba osób na utrzymaniu',
  errorMsg = 'Podana ilość jest nieprawidłowa',
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
    validate={validateAmountOfChildren(errorMsg, required)}
  />
)

AmountOfChildrenField.defaultProps = {
  name: 'amount_of_children',
}

export default AmountOfChildrenField
