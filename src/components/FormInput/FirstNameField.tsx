import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateText } from './validate'

const FirstNameField: FC<TextFieldProps> = ({
  id,
  label = 'Imię',
  placeholder,
  name,
  required = false,
  validate = validateText,
  showError = true,
}) => (
  <Field
    id={id}
    label={label}
    placeholder={placeholder}
    component={BaseField}
    required={required}
    showError={showError}
    name={name}
    validate={validate(required)}
  />
)

FirstNameField.defaultProps = {
  name: 'first_name',
}

export default FirstNameField
