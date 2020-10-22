"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _ = require("../");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OptionalGroup = function OptionalGroup(_ref) {
  var name = _ref.name,
      label = _ref.label,
      children = _ref.children,
      hideChecked = _ref.hideChecked;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      setValues = _useFormikContext.setValues;

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      id = _useContext.id;

  var hasManyItems = Array.isArray(children);
  var itemsNames = (0, _react.useMemo)(function () {
    return hasManyItems ? children && children.map(function (item) {
      return item.props.name;
    }) : [children.props.name];
  }, [hasManyItems, children]);
  var itemsForResetValues = (0, _react.useMemo)(function () {
    return itemsNames.reduce(function (acc, item) {
      acc[item] = undefined;
      return acc; // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {});
  }, [itemsNames]);
  var groupVisible = hideChecked && !values[name] || !hideChecked && values[name];
  (0, _react.useEffect)(function () {
    if (!groupVisible) {
      var newValues = _objectSpread(_objectSpread({}, values), itemsForResetValues);

      setValues(newValues, false);
      (0, _utils.setFormValuesToCache)(newValues, id);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [groupVisible, itemsForResetValues, setValues, values[name]]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
    disableCollapse: true,
    skipFieldForApi: true,
    id: name,
    name: name,
    label: label
  }), groupVisible && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};

OptionalGroup.propTypes = {
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.any.isRequired,
  label: _propTypes.default.string.isRequired,
  groupType: _propTypes.default.string,
  hideChecked: _propTypes.default.bool
};
OptionalGroup.defaultProps = {
  groupType: 'optionalGroup'
};
var _default = OptionalGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map