import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { SelectFieldProps } from '../../types'

import { BaseSelectField } from './base'

const options = {
  yes: 'tak',
  no: 'nie',
}

const CarStatusField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'car_status',
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

export default CarStatusField
