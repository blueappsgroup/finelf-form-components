import React from 'react';
import styled from 'styled-components';
// prettier-ignore
const HrLine = styled.hr`
  width: 100%;
  margin: 25px auto;
  border-color: ${props => props.theme.hrColor};
  border-width: ${props => props.theme.hrSize};
`;

const Hr = () => /*#__PURE__*/React.createElement(HrLine, null);

export default Hr;
//# sourceMappingURL=index.js.map