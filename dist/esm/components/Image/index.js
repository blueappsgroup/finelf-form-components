import React from 'react';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
// prettier-ignore
const StyledContainer = styled.div`
  position: relative;
  display: ${props => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  padding: ${props => props.theme.imageContainerPadding};
  margin: 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  ${props => !props.disableShadow && 'padding-right: 30px;'}
  
  img {
    max-width: 100%;  
    box-shadow: ${props => props.disableShadow ? 'none' : props.theme.imageBoxShadow};
  }
  
  span {
    position: absolute;
    top: ${props => props.theme.imageContainerTextTopPosition};
    font-size: ${props => props.theme.imageContainerTextFontSize};
    font-weight: ${props => props.theme.imageContainerTextFontWeight};
  }
  
  @media ${device.laptopL} { 
    display: flex;
  }
`;

const Image = ({
  src,
  alt,
  text,
  hideOnMobile,
  disableShadow
}) => /*#__PURE__*/React.createElement(StyledContainer, {
  hideOnMobile: hideOnMobile,
  disableShadow: disableShadow
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: alt
}), text && /*#__PURE__*/React.createElement("span", null, text));

export default Image;
//# sourceMappingURL=index.js.map