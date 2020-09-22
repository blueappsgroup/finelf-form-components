import { Field } from 'formik'
import React, { ReactElement } from 'react'
import { SelectFieldProps } from '../../types'

import { BaseSelectField } from './base'

const options = {
  none: 'brak',
  primary: 'podstawowe',
  vocational: 'zawodowe',
  secondary: 'średnie',
  higher: 'wyższe licencjackie',
  masters: 'wyższe magisterskie',
  phd: 'wyższe doktorskie',
}

const EducationField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'education',
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

export default EducationField
