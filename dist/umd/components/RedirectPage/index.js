(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "styled-components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styledComponents) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const PageWrapper = _styledComponents2.default.div`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
  ${props => props.backgroundImage && `background-image: url(${props.backgroundImage});`}
`;
  const Wrapper = _styledComponents2.default.div`
  max-width: 1000px;
  margin: 0 auto;
`;
  const StyledHeader = _styledComponents2.default.h1`
  font-size: 45px;
  font-weight: 900;
  line-height: 64px;
  margin: 0px 0px 45px 0px;
  color: ${props => props.theme.redirectPageHeaderTextColor};
`;
  const RedirectText = _styledComponents2.default.h3`
  font-size: 35px;
  font-weight: 700;
  line-height: 50px;
  margin: 0px;
  color: ${props => props.theme.redirectPageRedirectTextColor};
`;
  const CounterText = _styledComponents2.default.span`
  color: ${props => props.theme.redirectPageCounterTextColor};
`;
  const StyledLogo = _styledComponents2.default.img`
  margin: 90px auto 45px;
`;
  const StyledMainImg = _styledComponents2.default.img`
  margin: 45px auto 0px;
`;

  const RedirectPage = ({
    headerText = 'Dziękujemy za przesłanie wniosku! Szukamy dla Ciebie idealnej oferty.',
    backgroundImage,
    logoImg,
    mainImg,
    timeToRedirect = 3,
    redirectUrl
  }) => {
    const [counter, setCounter] = (0, _react.useState)(timeToRedirect);
    const decraseCounter = (0, _react.useCallback)(() => {
      setTimeout( // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setTimeout(() => setCounter(counter => counter - 1), 1000));
    }, [setCounter]);
    (0, _react.useLayoutEffect)(() => {
      if (counter > 0) {
        decraseCounter();
        return;
      }

      redirectUrl && window.location.replace(redirectUrl);
    }, [counter, decraseCounter, redirectUrl]);
    return /*#__PURE__*/_react2.default.createElement(PageWrapper, {
      backgroundImage: backgroundImage
    }, /*#__PURE__*/_react2.default.createElement(Wrapper, null, logoImg && /*#__PURE__*/_react2.default.createElement(StyledLogo, {
      src: logoImg
    }), /*#__PURE__*/_react2.default.createElement(StyledHeader, null, headerText), /*#__PURE__*/_react2.default.createElement(RedirectText, null, "Zostaniesz przekierowany za ", /*#__PURE__*/_react2.default.createElement(CounterText, null, counter, "s")), mainImg && /*#__PURE__*/_react2.default.createElement(StyledMainImg, {
      src: mainImg
    })));
  };

  exports.default = RedirectPage;
});
//# sourceMappingURL=index.js.map