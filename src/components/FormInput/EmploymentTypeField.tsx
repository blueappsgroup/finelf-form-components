/* eslint-disable @typescript-eslint/camelcase */
import { Field } from 'formik'
import React, { ReactElement } from 'react'
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

const EmploymentTypeField: (props: SelectFieldProps) => ReactElement = ({
  id,
  label,
  name = 'employment_type',
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

export default EmploymentTypeField