/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'

const options = {
  propety: 'mieszkanie własne',
  with_parent: 'mieszkanie rodziców',
  rental: 'mieszkanie wynajmowane',
  room: 'pokój',
}

const HousingStatusField: FC<SelectFieldProps> = ({
  id,
  label,
  name,
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

HousingStatusField.defaultProps = {
  name: 'housing_status',
}

export default HousingStatusField
