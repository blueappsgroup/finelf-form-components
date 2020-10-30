"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../consts/theme");

var _sizes = require("../../consts/sizes");

var _RedirectPage = _interopRequireDefault(require("../RedirectPage"));

var _TransactionId = _interopRequireDefault(require("../TransactionId"));

var _utils = require("../../utils");

var _form = require("../../consts/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: ", ";\n  justify-self: center;\n  margin: 0 10px;\n  background: ", ";\n  font-family: ", ";\n  padding: ", ";\n  border-radius: 6px;\n  box-shadow: ", ";\n\n  @media ", " {\n    padding: ", ";\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledForm = (0, _styledComponents.default)(_formik.Form)(_templateObject(), function (props) {
  return props.theme.formMaxWidth;
}, function (props) {
  return props.theme.formBgColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.formPaddingMobile;
}, function (props) {
  return props.theme.formBoxShadow;
}, _sizes.device.tablet, function (props) {
  return props.theme.formPadding;
});

var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children,
      onSubmit = _ref.onSubmit,
      customTheme = _ref.customTheme,
      id = _ref.id,
      stepsLength = _ref.stepsLength,
      stepsTitles = _ref.stepsTitles,
      hasRedirect = _ref.hasRedirect,
      redirectUrl = _ref.redirectUrl,
      timeToRedirect = _ref.timeToRedirect,
      redirectHeaderText = _ref.redirectHeaderText,
      logoImg = _ref.logoImg,
      redirectMainImg = _ref.redirectMainImg,
      redirectBgImg = _ref.redirectBgImg,
      sendDataToApi = _ref.sendDataToApi,
      apiUrl = _ref.apiUrl,
      transactionName = _ref.transactionName,
      propertyNamesFromUrl = _ref.propertyNamesFromUrl,
      dataWithUserAgent = _ref.dataWithUserAgent;
  var trasationIdValue = transactionName && new URLSearchParams(window.location.search).get(transactionName);
  var intialValuesFromUrl = (0, _react.useMemo)(function () {
    return propertyNamesFromUrl && propertyNamesFromUrl.length > 0 && (0, _utils.getFieldsValuesFromUrl)(propertyNamesFromUrl) || {};
  }, [propertyNamesFromUrl]);

  var _useState = (0, _react.useState)(redirectUrl),
      _useState2 = _slicedToArray(_useState, 2),
      redirectUrlPath = _useState2[0],
      setRedirectUrlPath = _useState2[1];

  var _useState3 = (0, _react.useState)(_objectSpread(_objectSpread(_objectSpread({}, intialValuesFromUrl), (0, _utils.getFormValuesFromCache)(id)), {}, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    trasaction_id: trasationIdValue
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      initialValues = _useState4[0],
      setInitialValues = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentStep = _useState6[0],
      setCurrentStep = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      fieldsForSkip = _useState8[0],
      setFieldsForSkip = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      errorFromApi = _useState10[0],
      setErrorFromApi = _useState10[1];

  var shouldRedirect = !errorFromApi && hasRedirect;

  var addFieldForSkip = function addFieldForSkip(key) {
    return setFieldsForSkip([].concat(_toConsumableArray(fieldsForSkip), [key]));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values, props) {
      var response, _yield$response$json, urlFromApi, statusFromApi;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (onSubmit) {
                onSubmit(values, props);
              }

              _context.prev = 1;

              if (!(sendDataToApi && apiUrl)) {
                _context.next = 15;
                break;
              }

              _context.next = 5;
              return (0, _utils.handleSendDataToApi)(values, apiUrl, id, fieldsForSkip, dataWithUserAgent);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              urlFromApi = _yield$response$json.redirectUrl;
              statusFromApi = _yield$response$json.status;

              if (!(statusFromApi === false)) {
                _context.next = 14;
                break;
              }

              setErrorFromApi(true);
              return _context.abrupt("return");

            case 14:
              urlFromApi && setRedirectUrlPath(urlFromApi);

            case 15:
              props.resetForm();
              props.setStatus(_form.formStatuses.submited);
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              props.setStatus(_form.formStatuses.error);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19]]);
    }));

    return function handleSubmit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleReset = function handleReset() {
    (0, _utils.resetFormValueCache)(id); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    setInitialValues({});
  };

  var prevStep = function prevStep() {
    return setCurrentStep(currentStep - 1);
  };

  var nextStep = function nextStep() {
    return setCurrentStep(currentStep + 1);
  };

  return /*#__PURE__*/_react.default.createElement(_utils.FormContext.Provider, {
    value: {
      id: id,
      apiUrl: apiUrl,
      stepsLength: stepsLength,
      currentStep: currentStep,
      stepsTitleList: stepsTitles,
      nextStep: nextStep,
      prevStep: prevStep,
      fieldsForSkip: fieldsForSkip,
      addFieldForSkip: addFieldForSkip,
      errorFromApi: errorFromApi
    }
  }, /*#__PURE__*/_react.default.createElement(_theme.ThemeProvider, {
    customTheme: _objectSpread({}, customTheme)
  }, /*#__PURE__*/_react.default.createElement(_formik.Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: handleSubmit,
    onReset: handleReset
  }, function (props) {
    return shouldRedirect && props.status === _form.formStatuses.submited && /*#__PURE__*/_react.default.createElement(_RedirectPage.default, {
      redirectUrl: redirectUrlPath,
      backgroundImage: redirectBgImg,
      logoImg: logoImg,
      headerText: redirectHeaderText,
      timeToRedirect: timeToRedirect,
      mainImg: redirectMainImg
    }) || /*#__PURE__*/_react.default.createElement(StyledForm, {
      id: id
    }, /*#__PURE__*/_react.default.createElement(_TransactionId.default, null), children);
  })));
};

var _default = FormWrapper;
exports.default = _default;
//# sourceMappingURL=index.js.map