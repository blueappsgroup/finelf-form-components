"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxBase = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledRow = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n  position: relative;\n  overflow: ", ";\n\n  a {\n    color: ", ";\n  }\n"])), function (props) {
  return props.collapsed ? 'none' : 'hidden';
}, function (props) {
  return props.theme.checkboxLinkColor;
});

var StyledArrow = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: ", ";\n  position: absolute;\n  right: 5px;\n  top: calc(\n    5px + 2 * ", "\n  );\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: ", ";\n  border-color: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.hasCollapse ? 'flex' : 'none';
}, function (props) {
  return props.theme.checkboxBorderWidth;
}, function (props) {
  return props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px';
}, function (props) {
  return props.collapsed ? "transparent transparent ".concat(props.theme.checkboxLabelArrowColor, " transparent") : "".concat(props.theme.checkboxLabelArrowColor, " transparent transparent transparent");
});

var CheckboxContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n"])));

var Icon = _styledComponents.default.svg(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 2px;\n"])), function (props) {
  return props.theme.checkboxMarkColor;
});

var HiddenCheckbox = _styledComponents.default.input.attrs({
  type: 'checkbox'
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));

var StyledCheckbox = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  background: ", ";\n  border-radius: 3px;\n  border: ", " solid;\n  border-color: ", ";\n  transition: all 150ms;\n\n  ", " {\n    visibility: ", ";\n  }\n\n  &::after {\n    display: ", ";\n    position: absolute;\n    content: '*';\n    top: 0px;\n    right: -10px;\n    font-weight: bold;\n    font-size: 15px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.checked ? props.theme.checkboxCheckedBgColor : props.theme.checkboxBgColor;
}, function (props) {
  return props.theme.checkboxBorderWidth;
}, function (props) {
  return props.error ? props.theme.checkboxBorderErrorColor : props.theme.checkboxBorderColor;
}, Icon, function (props) {
  return props.checked ? 'visible' : 'hidden';
}, function (props) {
  return props.required ? 'block' : 'none';
}, function (props) {
  return props.theme.checkboxBorderErrorColor;
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var StyledText = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: inline;\n  font-style: normal;\n  font-weight: 500;\n  font-size: ", ";\n  line-height: calc(\n    5px + ", "\n  );\n  color: ", ";\n  margin-top: 2px;\n"])), function (props) {
  return props.theme.checkboxLabelFontSize;
}, function (props) {
  return props.theme.checkboxLabelFontSize;
}, function (props) {
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


var Wrapper = _styledComponents.default.label(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  line-height: 18px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]))); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var StyledReadMore = (0, _styledComponents.default)(StyledText)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  padding: 0;\n  margin-left: 5px;\n  font-weight: ", ";\n"])), function (props) {
  return props.theme.checkboxLabelTextColor;
}, function (props) {
  return props.theme.styledSpanFontWeight;
});

var StyledContentWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding-right: ", ";\n"])), function (props) {
  return props.hasReadMore ? '0px' : '25px';
});

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
      id = _useContext.id,
      addFieldForSkip = _useContext.addFieldForSkip;

  var handleOnMouseOut = function handleOnMouseOut() {
    (0, _utils.setFormValuesToCache)(values, id);
  };

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showMoreCollapsed = _useState6[0],
      setShowMoreCollapsed = _useState6[1];

  var htmlContentList = props.HTMLcontent && props.HTMLcontent.split('--MORE--');

  var handleOnChange = function handleOnChange(e) {
    field.onChange && field.onChange(e);
    props.onChange && props.onChange(e);
    (0, _utils.setFormValuesToCache)(values, id);
  };

  var onCollapseClick = function onCollapseClick() {
    return setCollapsed(!collapsed);
  };

  var showMoreCollapseToggle = function showMoreCollapseToggle() {
    return setShowMoreCollapsed(!showMoreCollapsed);
  };

  (0, _react.useLayoutEffect)(function () {
    if (targetRef.current && targetRef.current.offsetHeight > 22 && !props.disableCollapse && !props.hasReadMore) {
      setHasCollapse(true);
    }
  }, [props.disableCollapse, props.hasReadMore, targetRef]);
  (0, _react.useEffect)(function () {
    props.skipFieldForApi && addFieldForSkip && addFieldForSkip(field.name); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_react.default.createElement(StyledRow, {
    hasCollapse: hasCollapse && !props.disableCollapse && !props.hasReadMore,
    collapsed: collapsed || props.disableCollapse || props.hasReadMore
  }, /*#__PURE__*/_react.default.createElement(Wrapper, {
    ref: targetRef,
    onMouseOut: handleOnMouseOut
  }, /*#__PURE__*/_react.default.createElement(Checkbox, _extends({}, field, props, {
    onChange: handleOnChange,
    checked: field.value,
    value: field.value || false,
    error: touched[field.name] && errors[field.name]
  })), props.label && /*#__PURE__*/_react.default.createElement(StyledText, null, props.label), /*#__PURE__*/_react.default.createElement(StyledContentWrapper, {
    hasReadMore: props.hasReadMore
  }, props.HTMLcontent && htmlContentList && /*#__PURE__*/_react.default.createElement(StyledText, {
    dangerouslySetInnerHTML: {
      __html: props.hasReadMore ? htmlContentList[0] : props.HTMLcontent
    }
  }), props.hasReadMore && htmlContentList && htmlContentList[1] && !showMoreCollapsed && /*#__PURE__*/_react.default.createElement(StyledReadMore, {
    onClick: showMoreCollapseToggle
  }, props.showMoreText), props.hasReadMore && htmlContentList && htmlContentList[1] && showMoreCollapsed && /*#__PURE__*/_react.default.createElement(StyledText, {
    dangerouslySetInnerHTML: {
      __html: htmlContentList[1]
    }
  }), props.hasReadMore && htmlContentList && htmlContentList[1] && showMoreCollapsed && /*#__PURE__*/_react.default.createElement(StyledReadMore, {
    onClick: showMoreCollapseToggle
  }, props.showLessText)), props.childrenBody && /*#__PURE__*/_react.default.createElement(StyledText, null, props.childrenBody)), /*#__PURE__*/_react.default.createElement(StyledArrow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed,
    onClick: onCollapseClick
  }));
};

exports.CheckboxBase = CheckboxBase;
var _default = CheckboxBase;
exports.default = _default;
//# sourceMappingURL=CheckBox.js.map