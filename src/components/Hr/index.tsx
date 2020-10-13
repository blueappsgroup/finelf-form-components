import React from 'react'
import styled from 'styled-components'

type StyledProps = {
  theme: {
    hrColor: string
    hrSize: string
  }
}

// prettier-ignore
const HrLine = styled.hr<StyledProps>`
  width: 100%;
  margin: 25px auto;
  border-color: ${(props: StyledProps): string => props.theme.hrColor};
  border-width: ${(props: StyledProps): string => props.theme.hrSize};
`

const Hr: React.FC = () => <HrLine />

export default Hr
