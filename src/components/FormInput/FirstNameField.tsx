import React from 'react'
import TextField from './TextField'

const FirstNameField = () => (
  <TextField
    required
    label="Imię"
    placeholder="Imię"
    showError
    name="first_name"
  />
)

export default FirstNameField
