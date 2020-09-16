import React from 'react'
import TextField from './TextField'
import { validateHouseNumber } from './validate'

const ApartmentNumberField = () => (
  <TextField
    required
    label="Numer mieszkania"
    placeholder="Numer mieszkania"
    showError
    name="apartment_number"
    validate={validateHouseNumber}
  />
)

export default ApartmentNumberField
