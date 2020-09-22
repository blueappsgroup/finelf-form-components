import React from 'react'
import TextField from './TextField'
import { validateIDCardNumber } from './validate'

const IDCardNumberField = () => (
  <TextField
    required
    label="Numer dowodu osobistego"
    placeholder="Numer dowodu osobistego"
    showError
    name="id_card_number"
    validate={validateIDCardNumber}
  />
)

export default IDCardNumberField
