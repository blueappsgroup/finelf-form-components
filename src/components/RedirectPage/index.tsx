import React, { FC, useCallback, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { RedirectPagePropsTypes } from '../../types'

type StyledProps = {
  theme: {
    redirectPageHeaderTextColor: string
    redirectPageRedirectTextColor: string
    redirectPageCounterTextColor: string
  }
}

const PageWrapper = styled.div<{ backgroundImage?: string }>`
  font-family: ${(props): string => props.theme.fontFamily};
  text-align: center;
  ${(props): string | undefined =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}
`

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const StyledHeader = styled.h1`
  font-size: 45px;
  font-weight: 900;
  line-height: 64px;
  margin: 0px 0px 45px 0px;
  color: ${(props: StyledProps): string =>
    props.theme.redirectPageHeaderTextColor};
`

const RedirectText = styled.h3`
  font-size: 35px;
  font-weight: 700;
  line-height: 50px;
  margin: 0px;
  color: ${(props: StyledProps): string =>
    props.theme.redirectPageRedirectTextColor};
`

const CounterText = styled.span`
  color: ${(props: StyledProps): string =>
    props.theme.redirectPageCounterTextColor};
`

const StyledLogo = styled.img`
  margin: 90px auto 45px;
`

const StyledMainImg = styled.img`
  margin: 45px auto 0px;
`

const RedirectPage: FC<RedirectPagePropsTypes> = ({
  headerText = 'Dziękujemy za przesłanie wniosku! Szukamy dla Ciebie idealnej oferty.',
  backgroundImage,
  logoImg,
  mainImg,
  timeToRedirect = 3,
  redirectUrl,
}) => {
  const [counter, setCounter] = useState(timeToRedirect)
  const decraseCounter = useCallback((): void => {
    setTimeout(setTimeout(() => setCounter((counter) => counter - 1), 1000))
  }, [setCounter])

  useLayoutEffect(() => {
    if (counter > 0) {
      decraseCounter()
      return
    }

    redirectUrl && window.location.replace(redirectUrl)
  }, [counter, decraseCounter, redirectUrl])

  return (
    <PageWrapper backgroundImage={backgroundImage}>
      <Wrapper>
        {logoImg && <StyledLogo src={logoImg} />}
        <StyledHeader>{headerText}</StyledHeader>
        <RedirectText>
          Zostaniesz przekierowany za <CounterText>{counter}s</CounterText>
        </RedirectText>
        {mainImg && <StyledMainImg src={mainImg} />}
      </Wrapper>
    </PageWrapper>
  )
}

export default RedirectPage
