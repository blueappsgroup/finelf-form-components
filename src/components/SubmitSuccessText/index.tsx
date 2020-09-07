import React from 'react'
import { useFormikContext } from 'formik'
import styled from 'styled-components'

type StyledProps = {
  theme: {
    successTextColor: string
  }
  show: boolean
}

const StyledText = styled.span<{ show: boolean }>`
  display: ${(props: StyledProps): string => (props.show ? 'block' : 'none')};
  color: ${(props: StyledProps): string => props.theme.successTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`
type Props = {
  text: string
}

const SubmitSuccessText: React.FC<Props> = ({ text }) => {
  const { status, dirty } = useFormikContext()

  return <StyledText show={status === 'submited' && !dirty}>{text}</StyledText>
}

export default SubmitSuccessText
