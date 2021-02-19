"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _formik = require("formik");

var _Button = _interopRequireDefault(require("../Button"));

var _StepHeader = _interopRequireDefault(require("./StepHeader"));

var _utils = require("../../utils");

var _sizes = require("../../consts/sizes");

var _Form = require("../Form");

var _form = require("../../consts/form");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  \n  & button {\n    flex-grow: 1;\n  }\n\n  @media ", " {\n    flex-direction: row;\n\n    & button {\n      &:first-of-type {\n        margin-right: ", ";\n      }\n\n      &:last-child {\n        margin-left: ", ";\n      }\n    }\n  }\n\n  @media ", " {\n    & button {\n      &:first-of-type {\n        margin-right: ", ";\n      }\n\n      &:last-child {\n        margin-left: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.visible ? 'block' : 'none';
});

// prettier-ignore
var ButtonsWrapper = _styledComponents.default.div(_templateObject2(), _sizes.device.mobileL, function (props) {
  return props.isFirstStep ? '0px' : '15px';
}, function (props) {
  return props.isFirstStep ? '0px' : '15px';
}, _sizes.device.tablet, function (props) {
  return props.isFirstStep ? '0px' : '30px';
}, function (props) {
  return props.isFirstStep ? '0px' : '30px';
});

var StepHeaderWrapper = _styledComponents.default.div(_templateObject3());

var Step = function Step(_ref) {
  var children = _ref.children,
      stepIndex = _ref.stepIndex,
      onStepComplete = _ref.onStepComplete;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var wrapperRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      id = _useContext.id,
      _useContext$currentSt = _useContext.currentStep,
      currentStep = _useContext$currentSt === void 0 ? 0 : _useContext$currentSt,
      _useContext$stepsLeng = _useContext.stepsLength,
      stepsLength = _useContext$stepsLeng === void 0 ? 1 : _useContext$stepsLeng,
      stepsTitleList = _useContext.stepsTitleList,
      prevStep = _useContext.prevStep,
      nextStep = _useContext.nextStep,
      initialValues = _useContext.initialValues,
      handleSubmit = _useContext.handleSubmit,
      formStatus = _useContext.formStatus;

  var lastStepIndex = stepsLength ? stepsLength - 1 : 0;
  var hideSubmitButton = formStatus === _form.formStatuses.agrrementsError;

  var handleStepSubmit = function handleStepSubmit(_ref2) {
    var values = _ref2.values;

    if (currentStep === lastStepIndex) {
      return handleSubmit && handleSubmit();
    }

    (0, _utils.setFormValuesToCache)(values, id);
    onStepComplete && onStepComplete();
    nextStep && nextStep();
  };

  (0, _react.useEffect)(function () {
    if (stepIndex === currentStep) {
      wrapperRef.current !== null && window.scrollTo(0, wrapperRef.current.offsetTop);
    }
  }, [currentStep, stepIndex, formStatus]);
  return stepIndex === currentStep && /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: initialValues // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    onSubmit: handleStepSubmit,
    render: function render(_ref3) {
      var isValid = _ref3.isValid;
      return /*#__PURE__*/_react.default.createElement(_Form.StyledForm, {
        id: stepIndex.toString()
      }, /*#__PURE__*/_react.default.createElement(Wrapper, {
        ref: wrapperRef,
        visible: stepIndex === currentStep
      }, /*#__PURE__*/_react.default.createElement(StepHeaderWrapper, null, currentStep !== 0 && /*#__PURE__*/_react.default.createElement(_StepHeader.default, null, stepsTitleList && stepsTitleList[currentStep - 1]), stepIndex === currentStep && /*#__PURE__*/_react.default.createElement(_StepHeader.default, {
        activeStep: true
      }, stepsTitleList && stepsTitleList[currentStep]), currentStep === 0 && stepsLength > 1 && /*#__PURE__*/_react.default.createElement(_StepHeader.default, null, stepsTitleList && stepsTitleList[currentStep + 1])), stepIndex === currentStep && children, /*#__PURE__*/_react.default.createElement(ButtonsWrapper, {
        isFirstStep: currentStep === 0
      }, currentStep !== 0 && /*#__PURE__*/_react.default.createElement(_Button.default, {
        type: "button",
        variant: "secondary",
        text: "Cofnij",
        onClick: prevStep
      }), currentStep !== lastStepIndex && !hideSubmitButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
        form: stepIndex.toString(),
        disabled: !isValid,
        type: "submit",
        text: "Dalej"
      }), currentStep === lastStepIndex && !hideSubmitButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
        disabled: !isValid,
        type: "submit",
        text: "Wy\u015Blij"
      }))));
    }
  }) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

Step.propTypes = {
  stepIndex: _propTypes.default.number.isRequired,
  children: _propTypes.default.any.isRequired,
  onStepComplete: _propTypes.default.func
};
var _default = Step;
exports.default = _default;
//# sourceMappingURL=index.js.map