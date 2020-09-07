import React, { ReactElement } from 'react'
import { Field } from 'formik'

import BaseField from './base'
import { validateTelNumber } from './validate'
import { TelephoneFieldProps } from '../../types'

const TelephoneField: (props: TelephoneFieldProps) => ReactElement = ({
  id,
  label,
  placeholder = 'Telefon',
  errorMsg = 'Nie poprawny numer telefonu',
  name = 'telepone',
  required = false,
}) => (
  <Field
    required={required}
    id={id}
    name={name}
    component={BaseField}
    label={label}
    placeholder={placeholder}
    type="tel"
    validate={validateTelNumber(errorMsg, required)}
  />
)

export default TelephoneField
