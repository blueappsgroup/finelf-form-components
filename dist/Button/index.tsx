import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${(props: any): string => props.theme.buttonBgColor};
  border-radius: 4px;
  border: none;
  color: ${(props: any): string => props.theme.buttonTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 28px;
  margin-top: 20px;
`
type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }) => (
  <StyledButton type="submit">{text}</StyledButton>
)

export default Button
