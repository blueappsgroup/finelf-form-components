function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable indent */
import React, { useState, useLayoutEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { FormContext, setFormValuesToCache } from '../../utils';
const StyledRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
  height: ${props => props.collapsed ? 'auto' : '20px'};
  overflow: ${props => props.collapsed ? 'none' : 'hidden'};
`;
const StyledArrow = styled.span`
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
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.checkboxMarkColor};
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({
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
const StyledCheckbox = styled.div`
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
const StyledText = styled.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.checkboxLabelTextColor};
  padding-left: 10px;
  padding-right: 25px;
`; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const Checkbox = (_ref) => {
  let {
    checked,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["checked", "error"]);

  return /*#__PURE__*/React.createElement(CheckboxContainer, null, /*#__PURE__*/React.createElement(HiddenCheckbox, _extends({
    checked: checked
  }, props)), /*#__PURE__*/React.createElement(StyledCheckbox, {
    checked: checked,
    error: error
  }, /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


const Wrapper = styled.label`
  display: flex;
`;
export const CheckboxBase = (_ref2) => {
  let {
    field,
    form: {
      touched,
      errors,
      values
    }
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  const targetRef = useRef(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hasCollapse, setHasCollapse] = useState(false);
  const {
    id
  } = useContext(FormContext);

  const handleOnMouseOut = () => {
    setFormValuesToCache(values, id);
  };

  const handleOnChange = e => {
    props.onChange && props.onChange(e);
    field.onChange && field.onChange(e);
    setFormValuesToCache(values, id);
  };

  const onCollapseClick = () => setCollapsed(!collapsed);

  useLayoutEffect(() => {
    if (targetRef.current && targetRef.current.offsetHeight > 22) {
      setHasCollapse(true);
    }
  }, [targetRef]);
  return /*#__PURE__*/React.createElement(StyledRow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed
  }, /*#__PURE__*/React.createElement(Wrapper, {
    ref: targetRef,
    onMouseOut: handleOnMouseOut
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, field, props, {
    onChange: handleOnChange,
    checked: field.value,
    value: field.value || false,
    error: touched[field.name] && errors[field.name]
  })), /*#__PURE__*/React.createElement(StyledText, null, props.label)), /*#__PURE__*/React.createElement(StyledArrow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed,
    onClick: onCollapseClick
  }));
};
export default CheckboxBase;
//# sourceMappingURL=CheckBox.js.map