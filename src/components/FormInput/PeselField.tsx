import React, { ReactElement } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validatePesel } from './validate'

const PeselField: (props: TextFieldProps) => ReactElement = ({
  id,
  label = 'Pesel',
  placeholder = 'Pesel',
  name = 'id_code',
  required = false,
  validate = validatePesel,
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

export default PeselField
