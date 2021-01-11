import React, { FC } from 'react'

import { TextFieldWithConditonProps } from '../../types'
import BaseField from './base'
import { validateText } from './validate'
import { Field } from 'formik'

const CompanyNameField: FC<TextFieldWithConditonProps> = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
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
