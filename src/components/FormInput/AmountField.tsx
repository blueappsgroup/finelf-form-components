import React, { FC } from 'react'
import { Field } from 'formik'

import { RangeFieldProps } from '../../types'
import { BaseRangeField } from './base'

const AmountField: FC<RangeFieldProps> = ({
  id,
  label = 'Kwota pożyczki',
  name,
  required = false,
  showError = true,
  showMinMax = true,
  min = 300,
  max = 10000,
  step = 100,
  value = 2000,
  suffix = 'PLN',
  unit = 'zł',
}) => (
  <Field
    required={required}
    showError={showError}
    showMinMax={showMinMax}
    id={id}
    name={name}
    component={BaseRangeField}
    label={label}
    type="text"
    min={min}
    max={max}
    step={step}
    value={value}
    suffix={suffix}
    unit={unit}
  />
)

AmountField.defaultProps = {
  name: 'amount',
}

export default AmountField
