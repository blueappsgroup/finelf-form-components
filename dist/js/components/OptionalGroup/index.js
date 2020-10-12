"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionalGroup = function OptionalGroup(_ref) {
  var name = _ref.name,
      label = _ref.label,
      children = _ref.children;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values;

  var groupVisible = !!values[name];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
    skipFieldForApi: true,
    id: name,
    name: name,
    label: label
  }), groupVisible && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
};

OptionalGroup.propTypes = {
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.any.isRequired,
  label: _propTypes.default.string.isRequired
};
var _default = OptionalGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map