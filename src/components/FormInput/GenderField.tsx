import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { SelectFieldProps } from '../../types'

import { BaseSelectField } from './base'

const options = {
  male: 'mężczyzna',
  female: 'kobieta',
}

const GenderField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'gender',
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

export default GenderField
