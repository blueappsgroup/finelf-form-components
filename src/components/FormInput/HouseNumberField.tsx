import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateHouseNumber } from './validate'

const HouseNumberField: FC<TextFieldProps> = ({
  id,
  label = 'Numer domu',
  placeholder = 'Numer domu',
  name,
  required = false,
  validate = validateHouseNumber,
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

HouseNumberField.defaultProps = {
  name: 'house_number',
}

export default HouseNumberField
