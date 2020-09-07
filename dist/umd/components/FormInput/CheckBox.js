(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "styled-components", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("styled-components"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CheckboxBase = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
  /* eslint-disable indent */


  const StyledRow = _styledComponents2.default.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
  height: ${props => props.collapsed ? 'auto' : '20px'};
  overflow: ${props => props.collapsed ? 'none' : 'hidden'};
`;
  const StyledArrow = _styledComponents2.default.span`
  display: ${props => props.hasCollapse ? 'flex' : 'none'};
  position: absolute;
  right: 5px;
  top: 5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${props => props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px'};
  border-color: ${props => props.collapsed ? `transparent transparent ${props.theme.checkboxLabelArrowColor} transparent` : `${props.theme.checkboxLabelArrowColor} transparent transparent transparent`};
`;
  const CheckboxContainer = _styledComponents2.default.div`
  display: inline-block;
  vertical-align: middle;
`;
  const Icon = _styledComponents2.default.svg`
  fill: none;
  stroke: ${props => props.theme.checkboxMarkColor};
  stroke-width: 2px;
`;
  const HiddenCheckbox = _styledComponents2.default.input.attrs({
    type: 'checkbox'
  })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
  const StyledCheckbox = _styledComponents2.default.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => props.theme.checkboxBgColor};
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props => props.error ? props.theme.checkboxBorderErrorColor : props.theme.checkboxBorderColor};
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`;
  const StyledText = _styledComponents2.default.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.checkboxLabelTextColor};
  padding-left: 10px;
  padding-right: 25px;
`; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const Checkbox = _ref => {
    let {
      checked,
      error
    } = _ref,
        props = _objectWithoutProperties(_ref, ["checked", "error"]);

    return /*#__PURE__*/_react2.default.createElement(CheckboxContainer, null, /*#__PURE__*/_react2.default.createElement(HiddenCheckbox, _extends({
      checked: checked
    }, props)), /*#__PURE__*/_react2.default.createElement(StyledCheckbox, {
      checked: checked,
      error: error
    }, /*#__PURE__*/_react2.default.createElement(Icon, {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/_react2.default.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))));
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  const Wrapper = _styledComponents2.default.label`
  display: flex;
`;

  const CheckboxBase = exports.CheckboxBase = _ref2 => {
    let {
      field,
      form: {
        touched,
        errors,
        values
      }
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["field", "form"]);

    const targetRef = (0, _react.useRef)(null);
    const [collapsed, setCollapsed] = (0, _react.useState)(false);
    const [hasCollapse, setHasCollapse] = (0, _react.useState)(false);
    const {
      id
    } = (0, _react.useContext)(_utils.FormContext);

    const handleOnMouseOut = () => {
      (0, _utils.setFormValuesToCache)(values, id);
    };

    const onCollapseClick = () => setCollapsed(!collapsed);

    (0, _react.useLayoutEffect)(() => {
      if (targetRef.current && targetRef.current.offsetHeight > 22) {
        setHasCollapse(true);
      }
    }, [targetRef]);
    return /*#__PURE__*/_react2.default.createElement(StyledRow, {
      hasCollapse: hasCollapse,
      collapsed: collapsed
    }, /*#__PURE__*/_react2.default.createElement(Wrapper, {
      ref: targetRef,
      onMouseOut: handleOnMouseOut
    }, /*#__PURE__*/_react2.default.createElement(Checkbox, _extends({}, field, props, {
      checked: field.value,
      value: field.value || false,
      error: touched[field.name] && errors[field.name]
    })), /*#__PURE__*/_react2.default.createElement(StyledText, null, props.label)), /*#__PURE__*/_react2.default.createElement(StyledArrow, {
      hasCollapse: hasCollapse,
      collapsed: collapsed,
      onClick: onCollapseClick
    }));
  };

  exports.default = CheckboxBase;
});
//# sourceMappingURL=CheckBox.js.map