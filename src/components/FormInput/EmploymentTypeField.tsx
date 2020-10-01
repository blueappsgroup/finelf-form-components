/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react'
import { Field } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'

const options = {
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'wdowa/wdowiec',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło',
}

const EmploymentTypeField: FC<SelectFieldProps> = ({
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

EmploymentTypeField.defaultProps = {
  name: 'employment_type',
}

export default EmploymentTypeField
