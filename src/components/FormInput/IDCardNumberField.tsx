import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateIDCardNumber } from './validate'

const IDCardNumberField: FC<TextFieldProps> = ({
  id,
  label = 'Numer dowodu osobistego',
  placeholder,
  name,
  required = false,
  validate = validateIDCardNumber,
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

IDCardNumberField.defaultProps = {
  name: 'id_card_number',
}

export default IDCardNumberField
