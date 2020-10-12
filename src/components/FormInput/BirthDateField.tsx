import React, { FC } from 'react'

import { DatePickerField } from './base'
import { BirthDateFieldProps } from '../../types'

const BirthDateField: FC<BirthDateFieldProps> = ({
  id,
  label,
  placeholder = 'Data urodzenia',
  name,
  required = false,
  showError = true,
}) => (
  <DatePickerField
    required={required}
    showError={showError}
    id={id}
    name={name}
    label={label}
    placeholder={placeholder}
  />
)

BirthDateField.defaultProps = {
  name: 'date_of_birth',
}

export default BirthDateField
