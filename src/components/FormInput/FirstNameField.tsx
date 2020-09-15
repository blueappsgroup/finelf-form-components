import React from 'react'
import TextField from './TextField'

const FirstName = () => (
  <TextField
    required
    label="Imię"
    placeholder="Imię"
    showError
    name="first_name"
  />
)

export default FirstName
