(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "styled-components", "formik", "../Button", "./StepHeader", "../../utils", "../../consts/sizes", "../Form", "../../consts/form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("styled-components"), require("formik"), require("../Button"), require("./StepHeader"), require("../../utils"), require("../../consts/sizes"), require("../Form"), require("../../consts/form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styledComponents, global.formik, global.Button, global.StepHeader, global.utils, global.sizes, global.Form, global.form);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styledComponents, _formik, _Button, _StepHeader, _utils, _sizes, _Form, _form) {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapperRef = (0, _react.useRef)(null);
    const {
      id,
      currentStep = 0,
      stepsLength = 1,
      stepsTitleList,
      prevStep,
      nextStep,
      initialValues,
      handleSubmit,
      formStatus
    } = (0, _react.useContext)(_utils.FormContext);
    const lastStepIndex = stepsLength ? stepsLength - 1 : 0;
    const hideSubmitButton = formStatus === _form.formStatuses.agrrementsError;

    const handleStepSubmit = ({
      values
    }) => {
      if (currentStep === lastStepIndex) {
        return handleSubmit && handleSubmit();
      }

      (0, _utils.setFormValuesToCache)(values, id);
      onStepComplete && onStepComplete();
      nextStep && nextStep();
    };

    (0, _react.useEffect)(() => {
      if (stepIndex === currentStep) {
        wrapperRef.current !== null && window.scrollTo(0, wrapperRef.current.offsetTop);
      }
    }, [currentStep, stepIndex, formStatus]);
    return stepIndex === currentStep && /*#__PURE__*/_react2.default.createElement(_formik.Formik, {
      validateOnMount: true,
      enableReinitialize: true,
      initialValues: initialValues // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ,
      onSubmit: handleStepSubmit,
      render: ({
        isValid
      }) => {
        return /*#__PURE__*/_react2.default.createElement(_Form.StyledForm, {
          id: stepIndex.toString()
        }, /*#__PURE__*/_react2.default.createElement(Wrapper, {
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
        }), currentStep !== lastStepIndex && !hideSubmitButton && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
          form: stepIndex.toString(),
          disabled: !isValid,
          type: "submit",
          text: "Dalej"
        }), currentStep === lastStepIndex && !hideSubmitButton && /*#__PURE__*/_react2.default.createElement(_Button2.default, {
          disabled: !isValid,
          type: "submit",
          text: "Wy\u015Blij"
        }))));
      }
    }) || /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null);
  };

  Step.propTypes = {
    stepIndex: _propTypes2.default.number.isRequired,
    children: _propTypes2.default.any.isRequired,
    onStepComplete: _propTypes2.default.func
  };
  exports.default = Step;
});
//# sourceMappingURL=index.js.map