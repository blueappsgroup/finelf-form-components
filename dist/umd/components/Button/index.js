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
  background: ${props => props.variant === 'primary' ? props.theme.buttonBgColor : props.theme.buttonSecondaryBgColor};
  border-radius: 4px;
  border: ${props => props.variant === 'primary' ? 'none' : `4px solid ${props.theme.buttonSecondaryBorderColor}`};
  color: ${props => props.variant === 'primary' ? props.theme.buttonTextColor : props.theme.buttonSecondaryTextColor};
  outline: 0;
  letter-spacing: 0.5px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 16px;
  padding: 20px;
  margin-top: 20px;

  &:disabled {
    background: silver;
  }

  &:hover {
    cursor: pointer;
  }
`;

  const Button = ({
    text,
    type = 'button',
    variant = 'primary',
    onClick,
    disabled
  }) => /*#__PURE__*/_react2.default.createElement(StyledButton, {
    disabled: disabled,
    variant: variant,
    type: type,
    onClick: onClick
  }, text);

  exports.default = Button;
});
//# sourceMappingURL=index.js.map