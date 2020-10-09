import React from 'react'
import styled from 'styled-components'
import { device } from '../../consts/sizes'
import { ImageProps } from '../../types'

type StyledProps = {
  hideOnMobile?: boolean
}

// prettier-ignore
const StyledContainer = styled.div<StyledProps>`
  display: ${(props: StyledProps): string => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  margin: 0 auto 15px;
  align-items: flex-start;
  
  @media ${device.tablet} { 
    display: flex;
  }
`

const Image: React.FC<ImageProps> = ({ src, alt, hideOnMobile }) => (
  <StyledContainer hideOnMobile={hideOnMobile}>
    <img src={src} alt={alt} />
  </StyledContainer>
)

export default Image
