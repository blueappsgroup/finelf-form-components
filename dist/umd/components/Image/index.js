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
  display: ${props => props.hideOnMobile ? 'none' : 'flex'};
  justify-content: center;
  width: 100%;
  margin: 0 auto 15px;
  align-items: flex-start;
  
  img {
    max-width: 100%;  
  }
  
  @media ${_sizes.device.tablet} { 
    display: flex;
  }
`;

  const Image = ({
    src,
    alt,
    hideOnMobile
  }) => /*#__PURE__*/_react2.default.createElement(StyledContainer, {
    hideOnMobile: hideOnMobile
  }, /*#__PURE__*/_react2.default.createElement("img", {
    src: src,
    alt: alt
  }));

  exports.default = Image;
});
//# sourceMappingURL=index.js.map