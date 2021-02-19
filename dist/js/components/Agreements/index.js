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

var _CheckboxesGroup = _interopRequireDefault(require("../CheckboxesGroup"));

var _ = require("../");

var _utils = require("../../utils");

var _base = require("../FormInput/base");

var _form = require("../../consts/form");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var data = _taggedTemplateLiteral(["\n  position: static;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledErrorText = (0, _styledComponents.default)(_base.StyledError)(_templateObject());

var Agreemnets = function Agreemnets(_ref) {
  var linksForReplace = _ref.linksForReplace,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'agreements' : _ref$name,
      _ref$requiredErorText = _ref.requiredErorText,
      requiredErorText = _ref$requiredErorText === void 0 ? '* Zapoznanie się z treścią regulaminu serwisu oraz polityką prywatności jest wymagane.' : _ref$requiredErorText,
      hasReadMore = _ref.hasReadMore;

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      id = _useContext.id,
      apiUrl = _useContext.apiUrl,
      setInitialValues = _useContext.setInitialValues,
      initialValues = _useContext.initialValues,
      setFormStatus = _useContext.setFormStatus;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      errors = _useFormikContext.errors,
      setErrors = _useFormikContext.setErrors;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      agreements = _useState2[0],
      setAgreements = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var replaceLinkInAgreements = (0, _react.useCallback)(function (agreements) {
    var replacedAgreements = agreements.map(function (item) {
      var newContent = item.content;

      if (linksForReplace) {
        Object.keys(linksForReplace).forEach(function (key) {
          var regxp = new RegExp(key, 'g');
          newContent = newContent.replace(regxp, linksForReplace[key]);
          return newContent;
        });
      }

      return _objectSpread(_objectSpread({}, item), {}, {
        content: newContent
      });
    });
    return replacedAgreements;
  }, [linksForReplace]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var fetchAgreements = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data, hasError, dataForInitialize;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(apiUrl, "/forms/").concat(id, "/agreements"));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            hasError = false;
            dataForInitialize = data.reduce( // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function (acc, item) {
              acc.values[item.id] = false;

              if (item.required) {
                acc.required.push('required');

                if (!hasError && (!initialValues || !initialValues[name] || !initialValues[name][item.id])) {
                  hasError = true;
                }
              } else {
                acc.required.push(null);
              }

              return acc;
            }, {
              values: {},
              required: []
            });
            setAgreements(linksForReplace && replaceLinkInAgreements(data) || data);
            setInitialValues && setInitialValues(_objectSpread(_defineProperty({}, name, dataForInitialize.values), initialValues));

            if (hasError) {
              setErrors(_objectSpread(_defineProperty({}, name, dataForInitialize.required), errors));
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            setFormStatus && setFormStatus(_form.formStatuses.agrrementsError);
            console.log(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  })), [apiUrl, errors, id, initialValues, linksForReplace, name, replaceLinkInAgreements, setErrors, setFormStatus, setInitialValues]);
  (0, _react.useLayoutEffect)(function () {
    if (agreements.length === 0) {
      fetchAgreements();
    }

    if (agreements.length > 0 && !error) {
      var hasRequired = false;
      agreements.some(function (agreement) {
        if (agreement.required) {
          hasRequired = true;
          return true;
        }

        return false;
      });

      if (hasRequired !== error) {
        setError(hasRequired);
      }
    }
  }, [agreements, error, fetchAgreements]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array.isArray(agreements) && agreements.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CheckboxesGroup.default, {
    name: name
  }, agreements.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      key: item.id,
      name: "".concat(item.id),
      HTMLcontent: item.content,
      required: item.required,
      hasReadMore: hasReadMore
    });
  })), error && /*#__PURE__*/_react.default.createElement(StyledErrorText, null, requiredErorText)));
};

Agreemnets.propTypes = {
  linksForReplace: _propTypes.default.objectOf(_propTypes.default.string),
  name: _propTypes.default.string,
  groupType: _propTypes.default.string,
  requiredErorText: _propTypes.default.string,
  hasReadMore: _propTypes.default.bool
};
Agreemnets.defaultProps = {
  name: 'agreements',
  groupType: 'checkboxGroup'
};
var _default = Agreemnets;
exports.default = _default;
//# sourceMappingURL=index.js.map