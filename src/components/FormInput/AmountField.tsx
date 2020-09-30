import React, { FC } from 'react'
import { Field } from 'formik'

import { RangeFieldProps } from '../../types'
import { BaseRangeField } from './base'

const AmountField: FC<RangeFieldProps> = ({
  id,
  label = 'Kwota pożyczki',
  name,
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

AmountField.defaultProps = {
  name: 'amount',
}

export default AmountField
