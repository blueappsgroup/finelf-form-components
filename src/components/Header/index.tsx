import React from 'react'
import styled from 'styled-components'
import { device } from '../../consts/sizes'
import { HeaderProps } from '../../types'

type StyledProps = {
  theme: {
    headerTextColor: string
    headerFontWeight: string
    headerFontSize: string
    headerLineHeight: string
    headerBorderColor: string
    headerMargin: string
    subheaderTextColor: string
    subheaderFontSize: string
    subheaderLineHeight: string
    subheaderMargin: string
  }
  withBorder?: boolean
}

// prettier-ignore
const StyledMainHeader = styled.h2<StyledProps>`
  font-weight: ${(props: StyledProps): string => props.theme.headerFontWeight};
  font-size: ${(props: StyledProps): string => props.theme.headerFontSize};
  line-height: ${(props: StyledProps): string => props.theme.headerLineHeight};
  text-align: center;
  margin: ${(props: StyledProps): string => props.theme.headerMargin};
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props: StyledProps): string => props.theme.headerTextColor};
  position: relative;
  
  @media ${device.tablet} {
    margin: 0px 0px 50px 0px;
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
  font-size: ${(props: StyledProps): string => props.theme.subheaderFontSize};
  line-height: ${(props: StyledProps): string =>
    props.theme.subheaderLineHeight};
  margin: ${(props: StyledProps): string => props.theme.subheaderMargin};
`

const Header: React.FC<HeaderProps> = ({ text, type = 'main', withBorder }) =>
  type === 'main' ? (
    <StyledMainHeader withBorder={withBorder}>{text}</StyledMainHeader>
  ) : (
    <StyledSubHeader>{text}</StyledSubHeader>
  )

export default Header
