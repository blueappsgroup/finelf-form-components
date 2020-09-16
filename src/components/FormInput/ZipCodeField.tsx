import React from 'react'
import TextField from './TextField'
import { validateZipCode } from './validate'

const ZipCodeField = () => (
  <TextField
    required
    label="Kod pocztowy"
    placeholder="Kod pocztowy"
    showError
    name="text_zip"
    validate={validateZipCode}
  />
)

export default ZipCodeField
