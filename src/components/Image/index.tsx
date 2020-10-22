import React from 'react'
import styled from 'styled-components'
import { device } from '../../consts/sizes'
import { ImageProps } from '../../types'

type StyledProps = {
  hideOnMobile?: boolean
  disableShadow?: boolean
  theme: {
    imageContainerPadding: string
    imageBoxShadow: string
    imageContainerTextTopPosition: string
    imageContainerTextFontSize: string
    imageContainerTextFontWeight: string
  }
}

// prettier-ignore
const StyledContainer = styled.div<StyledProps>`
  position: relative;
  display: ${(props: StyledProps): string => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  padding: ${(props): string => props.theme.imageContainerPadding};
  margin: 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  ${(props: StyledProps) =>
    !props.disableShadow &&
    'padding-right: 30px;'}
  
  img {
    max-width: 100%;  
    box-shadow: ${(props: StyledProps): string => props.disableShadow ? 'none' : props.theme.imageBoxShadow};
  }
  
  span {
    position: absolute;
    top: ${(props): string => props.theme.imageContainerTextTopPosition};
    font-size: ${(props): string => props.theme.imageContainerTextFontSize};
    font-weight: ${(props): string => props.theme.imageContainerTextFontWeight};
  }
  
  @media ${device.laptopL} { 
    display: flex;
  }
`

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  text,
  hideOnMobile,
  disableShadow,
}) => (
  <StyledContainer hideOnMobile={hideOnMobile} disableShadow={disableShadow}>
    <img src={src} alt={alt} />
    {text && <span>{text}</span>}
  </StyledContainer>
)

export default Image
