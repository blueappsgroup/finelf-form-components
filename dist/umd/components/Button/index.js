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

  const StyledButton = _styledComponents2.default.button`
  background: ${props => props.theme.buttonBgColor};
  border-radius: 4px;
  border: none;
  color: ${props => props.theme.buttonTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 28px;
  margin-top: 20px;
`;

  const Button = ({
    text
  }) => /*#__PURE__*/_react2.default.createElement(StyledButton, {
    type: "submit"
  }, text);

  exports.default = Button;
});
//# sourceMappingURL=index.js.map
