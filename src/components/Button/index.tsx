import React from 'react'
import styled from 'styled-components'

import { ButtonProps } from '../../types'

type StyledProps = {
  theme: {
    buttonBgColor: string
    buttonTextColor: string
    buttonBorderColor: string
    buttonSecondaryTextColor: string
    buttonSecondaryBgColor: string
    buttonSecondaryBorderColor: string
  }
  variant: 'primary' | 'secondary'
  size?: 'large | medium | small'
  onClick?: Function
  form?: string
}

const StyledButton = styled.button<StyledProps>`
  background: ${(props: StyledProps): string =>
    props.variant === 'primary'
      ? props.theme.buttonBgColor
      : props.theme.buttonSecondaryBgColor};
  border-radius: 4px;
  border: ${(props: StyledProps): string =>
    props.variant === 'primary'
      ? 'none'
      : `4px solid ${props.theme.buttonSecondaryBorderColor}`};
  color: ${(props: StyledProps): string =>
    props.variant === 'primary'
      ? props.theme.buttonTextColor
      : props.theme.buttonSecondaryTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 20px;
  margin-top: 20px;

  &:disabled {
    background: silver;
  }

  &:hover {
    cursor: pointer;
  }
`

const Button: React.FC<ButtonProps> = ({
  text,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled,
  form,
}) => (
  <StyledButton
    disabled={disabled}
    variant={variant}
    type={type}
    onClick={onClick}
    form={form}
  >
    {text}
  </StyledButton>
)

export default Button
