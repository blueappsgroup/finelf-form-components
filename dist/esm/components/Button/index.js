import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  background: ${props => props.variant === 'primary' ? props.theme.buttonBgColor : props.theme.buttonSecondaryBgColor};
  border-radius: 4px;
  border: ${props => props.variant === 'primary' ? 'none' : `4px solid ${props.theme.buttonSecondaryBorderColor}`};
  color: ${props => props.variant === 'primary' ? props.theme.buttonTextColor : props.theme.buttonSecondaryTextColor};
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
`;

const Button = ({
  text,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled
}) => /*#__PURE__*/React.createElement(StyledButton, {
  disabled: disabled,
  variant: variant,
  type: type,
  onClick: onClick
}, text);

export default Button;
//# sourceMappingURL=index.js.map