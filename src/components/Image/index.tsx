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
  }
}

// prettier-ignore
const StyledContainer = styled.div<StyledProps>`
  display: ${(props: StyledProps): string => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  padding: ${(props): string => props.theme.imageContainerPadding};
  margin: 0 auto;
  align-items: flex-start;
  
  img {
    max-width: 100%;  
    box-shadow: ${(props: StyledProps): string => props.disableShadow ? 'none' : props.theme.imageBoxShadow};
  }
  
  @media ${device.tablet} { 
    display: flex;
  }
`

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  hideOnMobile,
  disableShadow,
}) => (
  <StyledContainer hideOnMobile={hideOnMobile} disableShadow={disableShadow}>
    <img src={src} alt={alt} />
  </StyledContainer>
)

export default Image
