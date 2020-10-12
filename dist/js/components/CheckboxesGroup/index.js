"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _CheckboxField = _interopRequireDefault(require("../FormInput/CheckboxField"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxesGroup = function CheckboxesGroup(_ref) {
  var name = _ref.name,
      children = _ref.children;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setValues = _useFormikContext.setValues;

  var hasManyCheckboxes = Array.isArray(children);
  var checkboxesNames = (0, _react.useMemo)(function () {
    return hasManyCheckboxes ? children && children.map(function (item) {
      return item.props.name;
    }) : [children.props.name];
  }, [hasManyCheckboxes, children]);

  var handleOnChange = function handleOnChange(e) {
    var fieldsToUpdate = checkboxesNames.reduce(function (acc, item) {
      acc[item] = e.target.value === 'true' ? false : true;
      return acc;
    }, {});
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, fieldsToUpdate)));
  };

  return /*#__PURE__*/_react.default.createElement(_formik.FieldArray, {
    name: name,
    render: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CheckboxField.default, {
        id: "".concat(name, ".selectAll"),
        name: "".concat(name, ".selectAll"),
        label: "Zaznacz wszystkie zgody",
        onChange: handleOnChange
      }), children && !hasManyCheckboxes && /*#__PURE__*/_react.default.createElement(_CheckboxField.default, _extends({}, children.props, {
        name: "".concat(name, ".").concat(children.props.name)
      })), children && hasManyCheckboxes && children.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_CheckboxField.default, _extends({}, item.props, {
          key: item.props.name,
          name: "".concat(name, ".").concat(item.props.name),
          id: "".concat(name, ".").concat(item.props.name)
        }));
      }));
    }
  });
};

CheckboxesGroup.propTypes = {
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.any.isRequired
};
var _default = CheckboxesGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map