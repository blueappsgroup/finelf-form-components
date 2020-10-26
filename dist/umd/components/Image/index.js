(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "styled-components", "../../consts/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"), require("../../consts/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _sizes) {
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

  // prettier-ignore
  const StyledContainer = _styledComponents2.default.div`
  position: relative;
  display: ${props => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  padding: ${props => props.theme.imageContainerPadding};
  margin: 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  ${props => !props.disableShadow && 'padding-right: 30px;'}
  
  img {
    max-width: 100%;  
    box-shadow: ${props => props.disableShadow ? 'none' : props.theme.imageBoxShadow};
  }
  
  span {
    position: absolute;
    top: ${props => props.theme.imageContainerTextTopPosition};
    font-size: ${props => props.theme.imageContainerTextFontSize};
    font-weight: ${props => props.theme.imageContainerTextFontWeight};
  }
  
  @media ${_sizes.device.laptopL} { 
    display: flex;
  }
`;

  const Image = ({
    src,
    alt,
    text,
    hideOnMobile,
    disableShadow
  }) => /*#__PURE__*/_react2.default.createElement(StyledContainer, {
    hideOnMobile: hideOnMobile,
    disableShadow: disableShadow
  }, /*#__PURE__*/_react2.default.createElement("img", {
    src: src,
    alt: alt
  }), text && /*#__PURE__*/_react2.default.createElement("span", null, text));

  exports.default = Image;
});
//# sourceMappingURL=index.js.map