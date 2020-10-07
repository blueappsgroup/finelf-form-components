import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateTelNumber } from './validate'
import { TelephoneFieldProps } from '../../types'

const TelephoneField: FC<TelephoneFieldProps> = ({
  id,
  label,
  placeholder,
  errorMsg = 'Podany numer telefonu jest nieprawidłowy',
  name,
  required = false,
  validate = validateTelNumber,
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
    prefix="+48"
    type="tel"
    validate={validate(errorMsg, required)}
  />
)

TelephoneField.defaultProps = {
  name: 'telephone',
}

export default TelephoneField
