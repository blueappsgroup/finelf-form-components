(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "styled-components", "../../consts/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("styled-components"), require("../../consts/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _styledComponents, _sizes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const StepHeader = _styledComponents2.default.h3`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 11px;
  letter-spacing: 0px;
  font-weight: ${props => props.activeStep ? 800 : 400};
  color: ${props => props.activeStep ? props.theme.stepHeaderActiveColor : props.theme.stepHeaderInActiveColor};
  border-bottom: ${props => props.activeStep ? `4px solid ${props.theme.stepHeaderActiveBorderColor}` : `2px solid ${props.theme.stepHeaderInActiveBorderColor}`};
  margin: 0px 0px 30px;
  padding-bottom: 10px;

  &:first-of-type {
    margin-right: 15px;
  }

  &:last-child {
    margin-left: 15px;
  }

  @media ${_sizes.device.mobileL} {
    font-size: 22px;
    margin: 0px 0px 40px;

    &:first-of-type {
      margin-right: 15px;
    }

    &:last-child {
      margin-left: 15px;
    }
  }

  @media ${_sizes.device.tablet} {
    &:first-of-type {
      margin-right: 30px;
    }

    &:last-child {
      margin-left: 30px;
    }
  }
`;
  exports.default = StepHeader;
});
//# sourceMappingURL=StepHeader.js.map