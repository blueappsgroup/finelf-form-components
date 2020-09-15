import React from 'react'
import TextField from './TextField'
import { validatePesel } from './validate'

const PeselField = () => (
  <TextField
    required
    label="Pesel"
    placeholder="pesel"
    showError
    name="id_code"
    validate={validatePesel}
  />
)

export default PeselField
