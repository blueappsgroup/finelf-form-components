import React, { FC } from 'react'
import { Field } from 'formik'

import { TextFieldProps } from '../../types'
import BaseField from './base'
import { validateText } from './validate'

const CompanyNameField: FC<TextFieldProps> = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name,
  required = false,
  validate = validateText,
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

CompanyNameField.defaultProps = {
  name: 'company_name',
}

export default CompanyNameField
