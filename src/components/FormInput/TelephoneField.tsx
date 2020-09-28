import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateTelNumber } from './validate'
import { TelephoneFieldProps } from '../../types'

const TelephoneField: (props: TelephoneFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Telefon',
  errorMsg = 'Podany numer telefonu jest nieprawidłowy',
  name = 'telephone',
  required = false,
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
    validate={validateTelNumber(errorMsg, required)}
  />
)

export default TelephoneField
