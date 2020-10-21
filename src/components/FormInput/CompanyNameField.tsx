import React, { FC } from 'react'

import { TextFieldWithConditonProps } from '../../types'
import BaseField from './base'
import { validateText } from './validate'
import CustomFieldWithCondition from './CustomFieldWithCondition'

const CompanyNameField: FC<TextFieldWithConditonProps> = ({
  id,
  label = 'Nazwa pracodawcy',
  placeholder = 'Nazwa pracodawcy',
  name = 'company_name',
  required = false,
  validate = validateText,
  showError = true,
  requiredCondition,
  visibleCondition = {
    // eslint-disable-next-line @typescript-eslint/camelcase
    employment_type: [
      'fixed',
      'temporary',
      'fixed_partial',
      'government',
      'agriculture',
      'service_contract',
    ],
  },
}) => (
  <CustomFieldWithCondition
    id={id}
    label={label}
    placeholder={placeholder}
    component={BaseField}
    required={required}
    showError={showError}
    name={name}
    validate={validate}
    requiredCondition={requiredCondition}
    visibleCondition={visibleCondition}
  />
)

CompanyNameField.defaultProps = {
  name: 'company_name',
}

export default CompanyNameField
