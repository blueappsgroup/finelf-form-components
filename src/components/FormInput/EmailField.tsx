import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateEmail } from './validate'
import { EmailFieldProps } from '../../types'

const EmailField: FC<EmailFieldProps> = ({
  id,
  label,
  placeholder,
  errorMsg = 'Podany email jest nieprawidłowy',
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
    type="email"
    validate={validateEmail(errorMsg, required)}
  />
)

EmailField.defaultProps = {
  name: 'email',
}

export default EmailField
