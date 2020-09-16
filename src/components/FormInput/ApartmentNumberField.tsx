import React from 'react'
import TextField from './TextField'
import { validateHouseNumber } from './validate'

const ApartmentNumberField = () => (
  <TextField
    required
    label="Numer domu"
    placeholder="Numer domu"
    showError
    name="house_number"
    validate={validateHouseNumber}
  />
)

export default ApartmentNumberField
