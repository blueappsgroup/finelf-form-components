import React from 'react';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
const StyledMainHeader = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  text-align: center;
  margin: 0px 0px 20px 0px;
  padding-bottom: 28px;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.headerTextColor};

  @media ${device.tablet} {
    margin: 0px 0px 30px 0px;
  }

  &::after {
    width: 33%;
    content: '';
    position: absolute;
    bottom: 0px;
    border: 3px solid
      ${props => props.theme.headerBorderColor};
    margin: 0 auto;
  }
`;
const StyledSubHeader = styled.h5`
  color: ${props => props.theme.subheaderTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`;

const Header = ({
  text,
  type = 'main'
}) => type === 'main' ? /*#__PURE__*/React.createElement(StyledMainHeader, null, text) : /*#__PURE__*/React.createElement(StyledSubHeader, null, text);

export default Header;
//# sourceMappingURL=index.js.map