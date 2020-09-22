/* eslint-disable @typescript-eslint/camelcase */
import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { SelectFieldProps } from '../../types'

import { BaseSelectField } from './base'

const options = {
  propety: 'mieszkanie własne',
  with_parent: 'mieszkanie rodziców',
  rental: 'mieszkanie wynajmowane',
  room: 'pokój',
}

const HousingStatusField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'housing_status',
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

export default HousingStatusField
