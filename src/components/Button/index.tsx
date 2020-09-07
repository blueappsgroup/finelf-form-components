import React from 'react'
import styled from 'styled-components'

import { ButtonProps } from '../../types'

type StyledProps = {
  theme: {
    submitButtonBgColor: string
    submitButtonTextColor: string
  }
}

const StyledButton = styled.button`
  background: ${(props: StyledProps): string =>
    props.theme.submitButtonBgColor};
  border-radius: 4px;
  border: none;
  color: ${(props: StyledProps): string => props.theme.submitButtonTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 28px;
  margin-top: 20px;
`

const Button: React.FC<ButtonProps> = ({ text }) => (
  <StyledButton type="submit">{text}</StyledButton>
)

export default Button
