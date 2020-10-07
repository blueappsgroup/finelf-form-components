"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxBase = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: inline;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  padding-left: 15px;\n  padding-right: 25px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  background: ", ";\n  border-radius: 3px;\n  border: 1px solid;\n  border-color: ", ";\n  transition: all 150ms;\n\n  ", " {\n    visibility: ", ";\n  }\n\n  &::after {\n    display: ", ";\n    position: absolute;\n    content: '*';\n    top: 0px;\n    right: -13px;\n    font-size: 15px;\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: ", ";\n  border-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n  position: relative;\n  height: ", ";\n  overflow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledRow = _styledComponents.default.div(_templateObject(), function (props) {
  return props.collapsed ? 'auto' : '20px';
}, function (props) {
  return props.collapsed ? 'none' : 'hidden';
});

var StyledArrow = _styledComponents.default.span(_templateObject2(), function (props) {
  return props.hasCollapse ? 'flex' : 'none';
}, function (props) {
  return props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px';
}, function (props) {
  return props.collapsed ? "transparent transparent ".concat(props.theme.checkboxLabelArrowColor, " transparent") : "".concat(props.theme.checkboxLabelArrowColor, " transparent transparent transparent");
});

var CheckboxContainer = _styledComponents.default.div(_templateObject3());

var Icon = _styledComponents.default.svg(_templateObject4(), function (props) {
  return props.theme.checkboxMarkColor;
});

var HiddenCheckbox = _styledComponents.default.input.attrs({
  type: 'checkbox'
})(_templateObject5());

var StyledCheckbox = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.checkboxBgColor;
}, function (props) {
  return props.error ? props.theme.checkboxBorderErrorColor : props.theme.checkboxBorderColor;
}, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
}, function (props) {
  return props.required ? 'block' : 'none';
}, function (props) {
  return props.theme.checkboxBorderErrorColor;
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var StyledText = _styledComponents.default.span(_templateObject7(), function (props) {
  return props.theme.checkboxLabelTextColor;
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var Checkbox = function Checkbox(_ref) {
  var checked = _ref.checked,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["checked", "error"]);

  return /*#__PURE__*/_react.default.createElement(CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(HiddenCheckbox, _extends({
    checked: checked
  }, props)), /*#__PURE__*/_react.default.createElement(StyledCheckbox, {
    checked: checked,
    error: error,
    required: props.required
  }, /*#__PURE__*/_react.default.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


var Wrapper = _styledComponents.default.label(_templateObject8());

var CheckboxBase = function CheckboxBase(_ref2) {
  var field = _ref2.field,
      _ref2$form = _ref2.form,
      touched = _ref2$form.touched,
      errors = _ref2$form.errors,
      values = _ref2$form.values,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  var targetRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasCollapse = _useState4[0],
      setHasCollapse = _useState4[1];

  var _useContext = (0, _react.useContext)(_utils.FormContext),
      id = _useContext.id;

  var handleOnMouseOut = function handleOnMouseOut() {
    (0, _utils.setFormValuesToCache)(values, id);
  };

  var handleOnChange = function handleOnChange(e) {
    props.onChange && props.onChange(e);
    field.onChange && field.onChange(e);
    (0, _utils.setFormValuesToCache)(values, id);
  };

  var onCollapseClick = function onCollapseClick() {
    return setCollapsed(!collapsed);
  };

  (0, _react.useLayoutEffect)(function () {
    if (targetRef.current && targetRef.current.offsetHeight > 22) {
      setHasCollapse(true);
    }
  }, [targetRef]);
  return /*#__PURE__*/_react.default.createElement(StyledRow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed
  }, /*#__PURE__*/_react.default.createElement(Wrapper, {
    ref: targetRef,
    onMouseOut: handleOnMouseOut
  }, /*#__PURE__*/_react.default.createElement(Checkbox, _extends({}, field, props, {
    onChange: handleOnChange,
    checked: field.value,
    value: field.value || false,
    error: touched[field.name] && errors[field.name]
  })), props.label && /*#__PURE__*/_react.default.createElement(StyledText, null, props.label), props.HTMLcontent && /*#__PURE__*/_react.default.createElement(StyledText, {
    dangerouslySetInnerHTML: {
      __html: props.HTMLcontent
    }
  }), props.childrenBody && /*#__PURE__*/_react.default.createElement(StyledText, null, props.childrenBody)), /*#__PURE__*/_react.default.createElement(StyledArrow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed,
    onClick: onCollapseClick
  }));
};

exports.CheckboxBase = CheckboxBase;
var _default = CheckboxBase;
exports.default = _default;
//# sourceMappingURL=CheckBox.js.map