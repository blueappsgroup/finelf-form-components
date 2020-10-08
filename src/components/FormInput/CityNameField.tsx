import { Field } from 'formik'
import React, { FC } from 'react'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateCityName } from './validate'

const CityNameField: FC<TextFieldProps> = ({
  id,
  label = 'Miasto',
  placeholder = 'Miasto',
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

CityNameField.defaultProps = {
  name: 'text_city',
}

export default CityNameField
