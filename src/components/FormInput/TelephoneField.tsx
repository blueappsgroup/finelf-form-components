import React, { FC } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateTelNumber } from './validate'
import { TelephoneFieldProps } from '../../types'

const TelephoneField: FC<TelephoneFieldProps> = ({
  id,
  label,
  placeholder = 'Numer telefonu',
  errorMsg = 'Podany numer telefonu jest nieprawidłowy',
  name,
  required = false,
  validate = validateTelNumber,
  showError = true,
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
    validate={validate(required, errorMsg)}
  />
)

TelephoneField.defaultProps = {
  name: 'telephone',
}

export default TelephoneField
