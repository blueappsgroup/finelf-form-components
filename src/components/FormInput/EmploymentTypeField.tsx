/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useEffect } from 'react'
import { Field, useFormikContext } from 'formik'

import { SelectFieldProps } from '../../types'
import { BaseSelectField } from './base'
import { validateSelect } from './validate'
import CompanyTax from './CompanyTaxField'
import CompanyNameField from './CompanyNameField'

const options = {
  fixed: 'umowa o pracę na czas nieokreślony',
  temporary: 'umowa o pracę na czas określony',
  self_employed: 'samozatrudnienie',
  fixed_partial: 'umowa o pracę na czas nieokreślony (niepełny etat)',
  government: 'stanowisko rządowe',
  unemployed: 'bezrobotny',
  pension: 'emeryt/rencista',
  agriculture: 'gospodarstwo rolne',
  student: 'student',
  housewife: 'gospodyni domowa',
  other: 'inne',
  service_contract: 'umowa zlecenie / umowa o dzieło',
}

const conditionValueListForCompanyNameField = [
  'fixed',
  'temporary',
  'fixed_partial',
  'government',
  'agriculture',
  'service_contract',
]

const EmploymentTypeField: FC<SelectFieldProps> = ({
  id,
  label,
  name = 'employment_type',
  required = false,
  validate,
  showError = true,
}) => {
  const { values, validateForm } = useFormikContext<any>()
  const fieldValue = values[name]
  useEffect(() => {
    validateForm()
  }, [fieldValue, validateForm])

  return (
    <>
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
      {name && values[name] === 'self_employed' && (
        <CompanyTax required name="company_tax_id" />
      )}
      {name && conditionValueListForCompanyNameField.includes(values[name]) && (
        <CompanyNameField required name="company_name" />
      )}
    </>
  )
}

EmploymentTypeField.defaultProps = {
  name: 'employment_type',
}

export default EmploymentTypeField
