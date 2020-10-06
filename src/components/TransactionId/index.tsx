import React, { FC } from 'react'
import { Field } from 'formik'
import styled from 'styled-components'

const StyledInput = styled.input`
  display: none;
`

const TrasactionId: FC<{}> = () => (
  <Field name="trasaction_id" component={StyledInput} />
)

export default TrasactionId
