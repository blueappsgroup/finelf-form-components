import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { RangeFieldProps } from '../../types'

import { BaseRangeField } from './base'

const PeriodField: (props: RangeFieldProps) => ReactElement = ({
  id,
  label = 'Okres spłaty',
  name = 'application_period',
  required = false,
  showError,
}) => (
  <Field
    required={required}
    showError={showError}
    id={id}
    name={name}
    component={BaseRangeField}
    label={label}
    type="text"
    min={3}
    max={60}
    step={1}
    value={12}
    suffix={'Dni'}
    unit={'Dni'}
  />
)

export default PeriodField
