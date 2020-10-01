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
  const StyledMainHeader = _styledComponents2.default.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  text-align: center;
  margin: 0px 0px 20px 0px;
  padding-bottom: 28px;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.headerTextColor};
  position: relative;
  
  @media ${_sizes.device.tablet} {
    margin: 0px 0px 30px 0px;
  }

  &::after {
    width: 33%;
    content: '';
    position: absolute;
    bottom: 0px;
    border: ${props => props.withBorder ? `3px solid ${props.theme.headerBorderColor}` : 'none'};
    margin: 0 auto;
  }
`;
  const StyledSubHeader = _styledComponents2.default.h5`
  color: ${props => props.theme.subheaderTextColor};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0px 20px 0px;
`;

  const Header = ({
    text,
    type = 'main',
    withBorder
  }) => type === 'main' ? /*#__PURE__*/_react2.default.createElement(StyledMainHeader, {
    withBorder: withBorder
  }, text) : /*#__PURE__*/_react2.default.createElement(StyledSubHeader, null, text);

  exports.default = Header;
});
//# sourceMappingURL=index.js.map