import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'
import { validateSelect } from './validate'

const options = {
  none: 'brak',
  primary: 'podstawowe',
  vocational: 'zawodowe',
  secondary: 'średnie',
  higher: 'wyższe licencjackie',
  masters: 'wyższe magisterskie',
  phd: 'wyższe doktorskie',
}

const EducationField: FC<SelectFieldProps> = ({
  id,
  label,
  name,
  required = false,
  validate,
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
    validate={
      (validate && validate(required)) || validateSelect(required, options)
    }
  />
)

EducationField.defaultProps = {
  name: 'education',
}

export default EducationField
