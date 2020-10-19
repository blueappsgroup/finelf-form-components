import React from 'react';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
// prettier-ignore
const StyledContainer = styled.div`
  display: ${props => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  margin: 0 auto 15px;
  align-items: flex-start;
  
  img {
    max-width: 100%;  
  }
  
  @media ${device.tablet} { 
    display: flex;
  }
`;

const Image = ({
  src,
  alt,
  hideOnMobile
}) => /*#__PURE__*/React.createElement(StyledContainer, {
  hideOnMobile: hideOnMobile
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: alt
}));

export default Image;
//# sourceMappingURL=index.js.map