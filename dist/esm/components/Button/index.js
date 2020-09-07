import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  background: ${props => props.theme.submitButtonBgColor};
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.submitButtonTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 28px;
  margin-top: 20px;
`;

const Button = ({
  text
}) => /*#__PURE__*/React.createElement(StyledButton, {
  type: "submit"
}, text);

export default Button;
//# sourceMappingURL=index.js.map