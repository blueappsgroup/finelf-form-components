import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'

const options = {
  yes: 'tak',
  no: 'nie',
}

const CarStatusField: FC<SelectFieldProps> = ({
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

CarStatusField.defaultProps = {
  name: 'car_status',
}

export default CarStatusField
