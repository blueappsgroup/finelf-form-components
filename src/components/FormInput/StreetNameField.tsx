import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateCityName } from './validate'

const StreetNameField: FC<TextFieldProps> = ({
  id,
  label = 'Ulica',
  placeholder = 'Ulica',
  name,
  required = false,
  validate = validateCityName,
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

StreetNameField.defaultProps = {
  name: 'street',
}

export default StreetNameField
