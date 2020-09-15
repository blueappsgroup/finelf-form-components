import React from 'react'
import TextField from './TextField'

const LastNameField = () => (
  <TextField
    required
    label="Nazwisko"
    placeholder="Nazwisko"
    showError
    name="last_name"
  />
)

export default LastNameField
