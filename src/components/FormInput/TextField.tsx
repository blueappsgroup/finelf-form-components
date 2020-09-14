import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { TextFieldProps } from '../../types'
import { validateText } from './validate'

const TextField: (props: TextFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Text',
  name = 'text field',
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
    validate={(validate && validate(required)) || validateText(required)}
  />
)

export default TextField
