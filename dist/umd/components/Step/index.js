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
    stepIndex,
    onStepComplete
  }) => {
    const wrapperRef = (0, _react.useRef)(null);
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
      if (item.props.name && !item.props.children) {
        acc[item.props.name] = true;
      }

      if (item.props.name && item.props.required && !item.props.visibleCondition) {
        acc.requiredFields[item.props.name] = true;
      }

      if (item.props && item.props.name === 'agreements') {
        acc.requiredFields[item.props.name] = true;
      }

      if (item.props.children) {
        const mappedChildrens = Array.isArray(item.props.children) ? item.props.children : [item.props.children]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        mappedChildrens.forEach(child => {
          if (child.props.name && child.props.required && !child.props.visibleCondition) {
            if (item.props.type === 'checkboxGroup') {
              !acc.requiredFields[item.props.name] && (acc.requiredFields[item.props.name] = {});
              acc.requiredFields[item.props.name][child.props.name] = true;
              return;
            }

            acc.requiredFields[child.props.name] = true;
          }

          if (child.props.name) {
            acc[child.props.name] = true;
          }
        });
      }

      return acc;
    }, {
      requiredFields: {}
    }), [children]);
    const [nextButtonDisabled, setNextButtonDisabled] = (0, _react.useState)(JSON.stringify(mappedFields) !== JSON.stringify({}));
    const lastStepIndex = stepsLength ? stepsLength - 1 : 0;
    (0, _react.useEffect)(() => {
      let hasError;
      Object.keys(mappedFields.requiredFields).some(key => {
        if (!values[key] || values[key] === '' || errors[key]) {
          hasError = true;
          return true;
        }

        if (key === 'agreements' && errors[key]) {
          hasError = true;
          return true;
        }

        return false;
      });

      if (!hasError) {
        Object.keys(mappedFields).some(key => {
          if (errors[key]) {
            hasError = true;
            return true;
          }

          return false;
        });
      }

      if (hasError) {
        setNextButtonDisabled(true);
      }

      if (!hasError) {
        setNextButtonDisabled(false);
      }
    }, [values, errors, mappedFields, children]);

    const handleClick = () => {
      onStepComplete && onStepComplete();
      nextStep && nextStep();
    };

    (0, _react.useEffect)(() => {
      if (stepIndex === currentStep) {
        wrapperRef.current !== null && window.scrollTo(0, wrapperRef.current.offsetTop);
      }
    }, [currentStep, stepIndex]);
    return /*#__PURE__*/_react2.default.createElement(Wrapper, {
      ref: wrapperRef,
      visible: stepIndex === currentStep
    }, /*#__PURE__*/_react2.default.createElement(StepHeaderWrapper, null, currentStep !== 0 && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, null, stepsTitleList && stepsTitleList[currentStep - 1]), stepIndex === currentStep && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, {
      activeStep: true
    }, stepsTitleList && stepsTitleList[currentStep]), currentStep === 0 && stepsLength > 1 && /*#__PURE__*/_react2.default.createElement(_StepHeader2.default, null, stepsTitleList && stepsTitleList[currentStep + 1])), stepIndex === currentStep && children, /*#__PURE__*/_react2.default.createElement(ButtonsWrapper, {
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
      onClick: handleClick
    }), currentStep === lastStepIndex && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      disabled: nextButtonDisabled,
      type: "submit",
      text: "Wy\u015Blij"
    })));
  };

  Step.propTypes = {
    stepIndex: _propTypes2.default.number.isRequired,
    children: _propTypes2.default.any.isRequired,
    onStepComplete: _propTypes2.default.func
  };
  exports.default = Step;
});
//# sourceMappingURL=index.js.map