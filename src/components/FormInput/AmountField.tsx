import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { RangeFieldProps } from '../../types'

import { BaseRangeField } from './base'

const AmountField: (props: RangeFieldProps) => ReactElement = ({
  id,
  label = 'Kwota pożyczki',
  name = 'amount',
  required = false,
  showError,
  showMinMax = true,
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
    min={300}
    max={10000}
    step={100}
    value={2000}
    suffix={'PLN'}
    unit={'zł'}
  />
)

export default AmountField
