import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { TextFieldProps } from '../../types'

const TextField: (props: TextFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Text',
  name = 'text field',
  required = false,
  validate,
}) => (
  <Field
    required={required}
    id={id}
    name={name}
    component={BaseField}
    label={label}
    placeholder={placeholder}
    type="text"
    validate={validate}
  />
)

export default TextField
