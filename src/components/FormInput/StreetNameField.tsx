import React from 'react'
import TextField from './TextField'
import { validateCityName } from './validate'

const StreetNameField = () => (
  <TextField
    required
    label="Ulica"
    placeholder="Ulica"
    showError
    name="street"
    validate={validateCityName}
  />
)

export default StreetNameField
