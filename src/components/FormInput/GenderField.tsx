import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'

const options = {
  male: 'mężczyzna',
  female: 'kobieta',
}

const GenderField: FC<SelectFieldProps> = ({
  id,
  label,
  name,
  required = false,
  showError,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseSelectField}
    label={label}
    type="select"
    options={options}
  />
)

GenderField.defaultProps = {
  name: 'gender',
}

export default GenderField
