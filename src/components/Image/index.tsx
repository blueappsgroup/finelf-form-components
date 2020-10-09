import React from 'react'
import styled from 'styled-components'
import { ImageProps } from '../../types'

// prettier-ignore
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 15px;
`

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <StyledContainer>
    <img src={src} alt={alt} />
  </StyledContainer>
)

export default Image
