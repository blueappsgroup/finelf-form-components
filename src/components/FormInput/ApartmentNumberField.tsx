import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateHouseNumber } from './validate'

const ApartmentNumberField: FC<TextFieldProps> = ({
  id,
  label = 'Numer mieszkania',
  placeholder,
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

ApartmentNumberField.defaultProps = {
  name: 'apartment_number',
}

export default ApartmentNumberField
