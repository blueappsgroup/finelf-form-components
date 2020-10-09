import React, { FC } from 'react'
import { Field } from 'formik'

import { RangeFieldProps } from '../../types'
import { BaseRangeField } from './base'

const PeriodField: FC<RangeFieldProps> = ({
  id,
  label = 'Okres spłaty',
  name,
  required = false,
  showError = true,
  showMinMax = true,
  min = 3,
  max = 60,
  step = 1,
  value = 12,
  suffix = 'Dni',
  unit = 'Dni',
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

PeriodField.defaultProps = {
  name: 'application_period',
}

export default PeriodField
