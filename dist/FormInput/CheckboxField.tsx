import React, { ReactElement } from 'react'
import { Field } from 'formik'

import CheckboxBase from './CheckBox'
import { CheckboxFieldProps } from './types'
import { validateCheckbox } from './validate'

const CheckboxFormField: (props: CheckboxFieldProps) => ReactElement = ({
  id = 'textField',
  label = 'Text checkbox',
  name = 'text field',
  required = false,
}) => (
  <Field
    required={required}
    id={id}
    name={name}
    component={CheckboxBase}
    label={label}
    type="checkbox"
    validate={validateCheckbox(required)}
  />
)

export default CheckboxFormField
