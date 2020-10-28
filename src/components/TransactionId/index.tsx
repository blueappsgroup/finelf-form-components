import React, { FC } from 'react'
import { Field } from 'formik'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: none;
`

const TransactionId: FC = () => (
  <Field name="transaction_id" component={StyledInput} />
)

export default TransactionId
