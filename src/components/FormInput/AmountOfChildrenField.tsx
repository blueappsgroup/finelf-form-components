import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateAmountOfChildren } from './validate'
import { AmountOfChildrenFieldProps } from '../../types'

const AmountOfChildrenField: (
  props: AmountOfChildrenFieldProps
) => ReactElement = ({
  id,
  label,
  placeholder = 'AmountOfChildren',
  errorMsg = 'Podana ilość jest nieprawidłowa',
  name = 'amount_of_children',
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
    validate={validateAmountOfChildren(errorMsg, required)}
  />
)

export default AmountOfChildrenField
