import React from 'react'
import styled from 'styled-components'
import { device } from '../../consts/sizes'

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
  color: ${(props: any): string => props.theme.headerTextColor};

  @media ${device.tablet} {
    margin: 0px 0px 30px 0px;
  }

  &::after {
    width: 33%;
    content: '';
    position: absolute;
    bottom: 0px;
    border: 3px solid ${(props: any): string => props.theme.headerBorderColor};
    margin: 0 auto;
  }
`

const StyledSubHeader = styled.h5`
  color: ${(props: any): string => props.theme.subheaderTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`

type Props = {
  text: string
  type?: 'main' | 'subheader'
}

const Header: React.FC<Props> = ({ text, type = 'main' }) =>
  type === 'main' ? (
    <StyledMainHeader>{text}</StyledMainHeader>
  ) : (
    <StyledSubHeader>{text}</StyledSubHeader>
  )

export default Header
