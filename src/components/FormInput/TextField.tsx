import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { TextFieldProps } from '../../types'
import { validateText } from './validate'

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  placeholder = 'Text',
  name,
  required = false,
  validate = validateText,
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
    validate={validate(required)}
  />
)

TextField.defaultProps = {
  name: 'text_field',
}

export default TextField
