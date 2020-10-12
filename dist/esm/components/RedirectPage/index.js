import React, { useCallback, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
const PageWrapper = styled.div`
  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  text-align: center;
  ${props => props.backgroundImage && `background-image: url(${props.backgroundImage});`}
`;
const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const StyledHeader = styled.h1`
  font-size: 45px;
  font-weight: 900;
  line-height: 64px;
  margin: 0px 0px 45px 0px;
  color: ${props => props.theme.redirectPageHeaderTextColor};
`;
const RedirectText = styled.h3`
  font-size: 35px;
  font-weight: 700;
  line-height: 50px;
  margin: 0px;
  color: ${props => props.theme.redirectPageRedirectTextColor};
`;
const CounterText = styled.span`
  color: ${props => props.theme.redirectPageCounterTextColor};
`;
const StyledLogo = styled.img`
  margin: 90px auto 45px;
`;
const StyledMainImg = styled.img`
  margin: 45px auto 0px;
`;

const RedirectPage = ({
  headerText = 'Dziękujemy za przesłanie wniosku! Szukamy dla Ciebie idealnej oferty.',
  backgroundImage,
  logoImg,
  mainImg,
  timeToRedirect = 5,
  redirectUrl
}) => {
  const [counter, setCounter] = useState(timeToRedirect);
  const decraseCounter = useCallback(() => {
    setTimeout(setTimeout(() => setCounter(counter => counter - 1), 1000));
  }, [setCounter]);
  useLayoutEffect(() => {
    if (counter > 0) {
      decraseCounter();
      return;
    }

    redirectUrl && window.location.replace(redirectUrl);
  }, [counter, decraseCounter, redirectUrl]);
  return /*#__PURE__*/React.createElement(PageWrapper, {
    backgroundImage: backgroundImage
  }, /*#__PURE__*/React.createElement(Wrapper, null, logoImg && /*#__PURE__*/React.createElement(StyledLogo, {
    src: logoImg
  }), /*#__PURE__*/React.createElement(StyledHeader, null, headerText), /*#__PURE__*/React.createElement(RedirectText, null, "Zostaniesz przekierowany za ", /*#__PURE__*/React.createElement(CounterText, null, counter, "s")), mainImg && /*#__PURE__*/React.createElement(StyledMainImg, {
    src: mainImg
  })));
};

export default RedirectPage;
//# sourceMappingURL=index.js.map