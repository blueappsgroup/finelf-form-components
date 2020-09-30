(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "formik", "../Button", "./StepHeader", "../../utils", "../../consts/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("formik"), require("../Button"), require("./StepHeader"), require("../../utils"), require("../../consts/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.formik, global.Button, global.StepHeader, global.utils, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _formik, _Button, _StepHeader, _utils, _sizes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _Button2 = _interopRequireDefault(_Button);

  var _StepHeader2 = _interopRequireDefault(_StepHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Wrapper = _styledComponents2.default.div`
  display: ${props => props.visible ? 'block' : 'none'};
`; // prettier-ignore

  const ButtonsWrapper = _styledComponents2.default.div`
  display: flex;
  flex-direction: column;
  
  & button {
    flex-grow: 1;
  }

  @media ${_sizes.device.mobileL} {
    flex-direction: row;

    & button {
      &:first-of-type {
        margin-right: ${props => props.isFirstStep ? '0px' : '15px'};
      }

      &:last-child {
        margin-left: ${props => props.isFirstStep ? '0px' : '15px'};
      }
    }
  }

  @media ${_sizes.device.tablet} {
    & button {
      &:first-of-type {
        margin-right: ${props => props.isFirstStep ? '0px' : '30px'};
      }

      &:last-child {
        margin-left: ${props => props.isFirstStep ? '0px' : '30px'};
      }
    }
  }
`;
  const StepHeaderWrapper = _styledComponents2.default.div`
  display: flex;
`;

  const Step = ({
    children,
    stepIndex
  }) => {
    const {
      currentStep = 0,
      stepsLength = 1,
      stepsTitleList,
      prevStep,
      nextStep
    } = (0, _react.useContext)(_utils.FormContext); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const {
      values,
      errors
    } = (0, _formik.useFormikContext)();
    const mappedFields = (0, _react.useMemo)(() => (Array.isArray(children) ? children : [children]).reduce((acc, item) => {
      if (item.props.name && item.props.required) {
        acc[item.props.name] = true;
      }

      if (item.props.children) {
        const mappedChildrens = Array.isArray(item.props.children) ? item.props.children : [item.props.children]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        mappedChildrens.forEach(child => {
          if (child.props.name && child.props.required) {
            if (item.props.name) {
              acc[item.props.name][child.props.name] = true;
              return;
            }

            acc[child.props.name] = true;
          }
        });
      }

      return acc;
    }, {}), [children]);
    const [nextButtonDisabled, setNextButtonDisabled] = (0, _react.useState)(JSON.stringify(mappedFields) !== JSON.stringify({}));
    const lastStepIndex = stepsLength ? stepsLength - 1 : 0;
    (0, _react.useEffect)(() => {
      let hasError;
      Object.keys(mappedFields).some(key => {
        if (!values[key] || values[key] === '' || errors[key]) {
          hasError = true;
          return true;
        }

        return false;
      });

      if (hasError) {
        setNextButtonDisabled(true);
      }

      if (!hasError) {
        setNextButtonDisabled(false);
      }
    }, [values, errors, mappedFields]);
    return /*#__PURE__*/_react2.default.createElement(Wrapper, {
      visible: stepIndex === currentStep
    }, /*#__PURE__*/_react2.default.createElement(StepHeaderWrapper, null, currentStep !== 0 && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, null, stepsTitleList && stepsTitleList[currentStep - 1]), stepIndex === currentStep && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, {
      activeStep: true
    }, stepsTitleList && stepsTitleList[currentStep]), currentStep === 0 && stepsLength > 1 && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, null, stepsTitleList && stepsTitleList[currentStep + 1])), children, /*#__PURE__*/_react2.default.createElement(ButtonsWrapper, {
      isFirstStep: currentStep === 0
    }, currentStep !== 0 && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      type: "button",
      variant: "secondary",
      text: "Cofnij",
      onClick: prevStep
    }), currentStep !== lastStepIndex && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      disabled: nextButtonDisabled,
      type: "button",
      text: "Dalej",
      onClick: nextStep
    }), currentStep === lastStepIndex && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      disabled: nextButtonDisabled,
      type: "submit",
      text: "Wy\u015Blij"
    })));
  };

  Step.propTypes = {
    stepIndex: _propTypes2.default.number.isRequired,
    children: _propTypes2.default.any.isRequired
  };
  exports.default = Step;
});
//# sourceMappingURL=index.js.map