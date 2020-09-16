import React from 'react'
import TextField from './TextField'
import { validateCityName } from './validate'

const CityNameField = () => (
  <TextField
    required
    label="Miasto"
    placeholder="Miasto"
    showError
    name="text_city"
    validate={validateCityName}
  />
)

export default CityNameField
