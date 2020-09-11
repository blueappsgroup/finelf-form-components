"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _CheckboxField = _interopRequireDefault(require("../FormInput/CheckboxField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxesGroup = function CheckboxesGroup(_ref) {
  var name = _ref.name,
      children = _ref.children;

  var _useFormikContext = (0, _formik.useFormikContext)(),
      setValues = _useFormikContext.setValues;

  var hasManyCheckboxes = Array.isArray(children);
  var checkboxesNames = hasManyCheckboxes ? children.map(function (item) {
    return item.props.name;
  }) : [children.props.name];

  var handleOnChange = function handleOnChange(_ref2) {
    var value = _ref2.target.value;
    var fieldsToUpdate = checkboxesNames.reduce(function (acc, item) {
      acc["".concat(item)] = !!value;
      return acc;
    }, {});
    setValues(_defineProperty({}, name, fieldsToUpdate));
  };

  return /*#__PURE__*/_react.default.createElement(_formik.FieldArray, {
    name: name,
    render: function render(arrayHelpers) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CheckboxField.default, {
        id: "".concat(name, ".selectAll"),
        name: "".concat(name, ".selectAll"),
        label: "Select all",
        onChange: handleOnChange
      }), children && !hasManyCheckboxes && /*#__PURE__*/_react.default.createElement(_CheckboxField.default, _extends({}, children.props, {
        name: "".concat(name, ".").concat(children.props.name)
      })), children && hasManyCheckboxes && children.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_CheckboxField.default, _extends({}, item.props, {
          key: item.props.name,
          name: "".concat(name, ".").concat(item.props.name)
        }));
      }));
    }
  });
};

var _default = CheckboxesGroup;
exports.default = _default;
//# sourceMappingURL=index.js.map