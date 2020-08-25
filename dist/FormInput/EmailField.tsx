import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateEmail } from './validate'
import { EmailFieldProps } from './types'

const EmailField: (props: EmailFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Email',
  errorMsg = 'Nie poprawny adres email',
  name = 'email',
  required = false,
}) => (
  <Field
    required={required}
    id={id}
    name={name}
    component={BaseField}
    label={label}
    placeholder={placeholder}
    type="email"
    validate={validateEmail(errorMsg, required)}
  />
)

export default EmailField
