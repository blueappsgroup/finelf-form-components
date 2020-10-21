import React, { FC } from 'react'
import { Field } from 'formik'

import CheckboxBase from './CheckBox'
import { CheckboxFieldProps } from '../../types'
import { validateCheckbox } from './validate'

const CheckboxFormField: FC<CheckboxFieldProps> = ({
  id = 'textField',
  label,
  name = 'checkbox_field',
  required = false,
  onChange,
  children,
  HTMLcontent,
  skipFieldForApi,
  disableCollapse,
}) => (
  <Field
    required={required}
    id={id}
    name={name}
    component={CheckboxBase}
    label={label}
    type="checkbox"
    validate={validateCheckbox(required)}
    onChange={onChange}
    childrenBody={children}
    HTMLcontent={HTMLcontent}
    skipFieldForApi={skipFieldForApi}
    disableCollapse={disableCollapse}
  />
)

CheckboxFormField.defaultProps = {
  name: 'checkbox_field',
}

export default CheckboxFormField
