import React from 'react';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
// prettier-ignore
const StyledMainHeader = styled.h2`
  font-weight: 600;
  font-size: ${props => props.theme.headerFontSize};
  line-height: 24px;
  text-align: center;
  margin: ${props => props.theme.headerMargin};
  padding-bottom: 28px;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.headerTextColor};
  position: relative;
  
  @media ${device.tablet} {
    margin: 0px 0px 30px 0px;
  }

  &::after {
    width: 33%;
    content: '';
    position: absolute;
    bottom: 0px;
    border: ${props => props.withBorder ? `3px solid ${props.theme.headerBorderColor}` : 'none'};
    margin: 0 auto;
  }
`;
const StyledSubHeader = styled.h5`
  color: ${props => props.theme.subheaderTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.theme.subheaderFontSize};
  line-height: 18px;
  margin: ${props => props.theme.subheaderMargin};
`;

const Header = ({
  text,
  type = 'main',
  withBorder
}) => type === 'main' ? /*#__PURE__*/React.createElement(StyledMainHeader, {
  withBorder: withBorder
}, text) : /*#__PURE__*/React.createElement(StyledSubHeader, null, text);

export default Header;
//# sourceMappingURL=index.js.map