import React from 'react'
import styled from 'styled-components'
import { device } from '../../consts/sizes'
import { HeaderProps } from '../../types'

type StyledProps = {
  theme: {
    headerTextColor: string
    headerBorderColor: string
    subheaderTextColor: string
  }
  withBorder?: boolean
}

// prettier-ignore
const StyledMainHeader = styled.h2<StyledProps>`
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  text-align: center;
  margin: 0px 0px 20px 0px;
  padding-bottom: 28px;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props: StyledProps): string => props.theme.headerTextColor};
  position: relative;
  
  @media ${device.tablet} {
    margin: 0px 0px 30px 0px;
  }

  &::after {
    width: 33%;
    content: '';
    position: absolute;
    bottom: 0px;
    border: ${(props: StyledProps): string => props.withBorder ? `3px solid ${props.theme.headerBorderColor}` : 'none'};
    margin: 0 auto;
  }
`

const StyledSubHeader = styled.h5<StyledProps>`
  color: ${(props: StyledProps): string => props.theme.subheaderTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`

const Header: React.FC<HeaderProps> = ({ text, type = 'main', withBorder }) =>
  type === 'main' ? (
    <StyledMainHeader withBorder={withBorder}>{text}</StyledMainHeader>
  ) : (
    <StyledSubHeader>{text}</StyledSubHeader>
  )

export default Header
