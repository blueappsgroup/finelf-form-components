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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      stepIndex = _ref.stepIndex;

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      _useContext$currentSt = _useContext.currentStep,
      currentStep = _useContext$currentSt === void 0 ? 0 : _useContext$currentSt,
      _useContext$stepsLeng = _useContext.stepsLength,
      stepsLength = _useContext$stepsLeng === void 0 ? 1 : _useContext$stepsLeng,
      stepsTitleList = _useContext.stepsTitleList,
      prevStep = _useContext.prevStep,
      nextStep = _useContext.nextStep; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors;

  var mappedFields = (0, _react.useMemo)(function () {
    return (Array.isArray(children) ? children : [children]).reduce(function (acc, item) {
      if (item.props.name && item.props.required) {
        acc[item.props.name] = true;
      }

      if (item.props && item.props.name === 'agreements') {
        acc[item.props.name] = true;
      }

      if (item.props.children) {
        var mappedChildrens = Array.isArray(item.props.children) ? item.props.children : [item.props.children]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        mappedChildrens.forEach(function (child) {
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
    }, {});
  }, [children]);

  var _useState = (0, _react.useState)(JSON.stringify(mappedFields) !== JSON.stringify({})),
      _useState2 = _slicedToArray(_useState, 2),
      nextButtonDisabled = _useState2[0],
      setNextButtonDisabled = _useState2[1];

  var lastStepIndex = stepsLength ? stepsLength - 1 : 0;
  (0, _react.useEffect)(function () {
    var hasError;
    Object.keys(mappedFields).some(function (key) {
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

    if (hasError) {
      setNextButtonDisabled(true);
    }

    if (!hasError) {
      setNextButtonDisabled(false);
    }
  }, [values, errors, mappedFields]);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    visible: stepIndex === currentStep
  }, /*#__PURE__*/_react.default.createElement(StepHeaderWrapper, null, currentStep !== 0 && /*#__PURE__*/_react.default.createElement(_StepHeader.default, null, stepsTitleList && stepsTitleList[currentStep - 1]), stepIndex === currentStep && /*#__PURE__*/_react.default.createElement(_StepHeader.default, {
    activeStep: true
  }, stepsTitleList && stepsTitleList[currentStep]), currentStep === 0 && stepsLength > 1 && /*#__PURE__*/_react.default.createElement(_StepHeader.default, null, stepsTitleList && stepsTitleList[currentStep + 1])), children, /*#__PURE__*/_react.default.createElement(ButtonsWrapper, {
    isFirstStep: currentStep === 0
  }, currentStep !== 0 && /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "button",
    variant: "secondary",
    text: "Cofnij",
    onClick: prevStep
  }), currentStep !== lastStepIndex && /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: nextButtonDisabled,
    type: "button",
    text: "Dalej",
    onClick: nextStep
  }), currentStep === lastStepIndex && /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: nextButtonDisabled,
    type: "submit",
    text: "Wy\u015Blij"
  })));
};

Step.propTypes = {
  stepIndex: _propTypes.default.number.isRequired,
  children: _propTypes.default.any.isRequired
};
var _default = Step;
exports.default = _default;
//# sourceMappingURL=index.js.map