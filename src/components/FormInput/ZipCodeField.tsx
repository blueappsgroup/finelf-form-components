import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateZipCode } from './validate'

const ZipCodeField: FC<TextFieldProps> = ({
  id,
  label = 'Kod pocztowy',
  placeholder,
  name,
  required = false,
  validate = validateZipCode,
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

ZipCodeField.defaultProps = {
  name: 'text_zip',
}

export default ZipCodeField
