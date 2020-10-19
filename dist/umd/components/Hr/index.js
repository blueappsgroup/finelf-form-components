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

  // prettier-ignore
  const HrLine = _styledComponents2.default.hr`
  width: 100%;
  margin: 25px auto;
  border-color: ${props => props.theme.hrColor};
  border-width: ${props => props.theme.hrSize};
`;

  const Hr = () => /*#__PURE__*/_react2.default.createElement(HrLine, null);

  exports.default = Hr;
});
//# sourceMappingURL=index.js.map