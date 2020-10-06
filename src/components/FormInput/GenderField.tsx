import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { SelectFieldProps } from '../../types'

import { BaseSelectField } from './base'
import { validateSelect } from './validate'

const options = {
  male: 'mężczyzna',
  female: 'kobieta',
}

const GenderField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'gender',
  required = false,
  validate,
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
    validate={
      (validate && validate(required)) || validateSelect(required, options)
    }
  />
)

export default GenderField
