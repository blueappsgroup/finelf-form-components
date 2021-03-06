function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable indent */
import React, { useState, useLayoutEffect, useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FormContext, setFormValuesToCache } from '../../utils';
const StyledRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  position: relative;
  overflow: ${props => props.collapsed ? 'none' : 'hidden'};

  a {
    color: ${props => props.theme.checkboxLinkColor};
  }
`;
const StyledArrow = styled.span`
  display: ${props => props.hasCollapse ? 'flex' : 'none'};
  position: absolute;
  right: 5px;
  top: calc(
    5px + 2 * ${props => props.theme.checkboxBorderWidth}
  );
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${props => props.collapsed ? '0px 6px 9px 6px' : '9px 6px 0 6px'};
  border-color: ${props => props.collapsed ? `transparent transparent ${props.theme.checkboxLabelArrowColor} transparent` : `${props.theme.checkboxLabelArrowColor} transparent transparent transparent`};

  &:hover {
    cursor: pointer;
  }
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
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
  position: relative;
  width: 18px;
  height: 18px;
  background: ${props => props.checked ? props.theme.checkboxCheckedBgColor : props.theme.checkboxBgColor};
  border-radius: 3px;
  border: ${props => props.theme.checkboxBorderWidth} solid;
  border-color: ${props => props.error ? props.theme.checkboxBorderErrorColor : props.theme.checkboxBorderColor};
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }

  &::after {
    display: ${props => props.required ? 'block' : 'none'};
    position: absolute;
    content: '*';
    top: 0px;
    right: -10px;
    font-weight: bold;
    font-size: 15px;
    color: ${props => props.theme.checkboxBorderErrorColor};
  }
`; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const StyledText = styled.span`
  display: inline;
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.theme.checkboxLabelFontSize};
  line-height: calc(
    5px + ${props => props.theme.checkboxLabelFontSize}
  );
  color: ${props => props.theme.checkboxLabelTextColor};
  margin-top: 2px;
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
    error: error,
    required: props.required
  }, /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


const Wrapper = styled.label`
  display: flex;
  line-height: 18px;

  &:hover {
    cursor: pointer;
  }
`; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const StyledReadMore = styled(StyledText)`
  color: ${props => props.theme.checkboxLabelTextColor};
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  font-weight: ${props => props.theme.styledSpanFontWeight};
`;
const StyledContentWrapper = styled.div`
  padding-right: ${props => props.hasReadMore ? '0px' : '25px'};
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
    id,
    addFieldForSkip
  } = useContext(FormContext);

  const handleOnMouseOut = () => {
    setFormValuesToCache(values, id);
  };

  const [showMoreCollapsed, setShowMoreCollapsed] = useState(false);
  const htmlContentList = props.HTMLcontent && props.HTMLcontent.split('--MORE--');

  const handleOnChange = e => {
    field.onChange && field.onChange(e);
    props.onChange && props.onChange(e);
    setFormValuesToCache(values, id);
  };

  const onCollapseClick = () => setCollapsed(!collapsed);

  const showMoreCollapseToggle = () => setShowMoreCollapsed(!showMoreCollapsed);

  useLayoutEffect(() => {
    if (targetRef.current && targetRef.current.offsetHeight > 22 && !props.disableCollapse && !props.hasReadMore) {
      setHasCollapse(true);
    }
  }, [props.disableCollapse, props.hasReadMore, targetRef]);
  useEffect(() => {
    props.skipFieldForApi && addFieldForSkip && addFieldForSkip(field.name); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(StyledRow, {
    hasCollapse: hasCollapse && !props.disableCollapse && !props.hasReadMore,
    collapsed: collapsed || props.disableCollapse || props.hasReadMore
  }, /*#__PURE__*/React.createElement(Wrapper, {
    ref: targetRef,
    onMouseOut: handleOnMouseOut
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, field, props, {
    onChange: handleOnChange,
    checked: field.value,
    value: field.value || false,
    error: touched[field.name] && errors[field.name]
  })), props.label && /*#__PURE__*/React.createElement(StyledText, null, props.label), /*#__PURE__*/React.createElement(StyledContentWrapper, {
    hasReadMore: props.hasReadMore
  }, props.HTMLcontent && htmlContentList && /*#__PURE__*/React.createElement(StyledText, {
    dangerouslySetInnerHTML: {
      __html: props.hasReadMore ? htmlContentList[0] : props.HTMLcontent
    }
  }), props.hasReadMore && htmlContentList && htmlContentList[1] && !showMoreCollapsed && /*#__PURE__*/React.createElement(StyledReadMore, {
    onClick: showMoreCollapseToggle
  }, props.showMoreText), props.hasReadMore && htmlContentList && htmlContentList[1] && showMoreCollapsed && /*#__PURE__*/React.createElement(StyledText, {
    dangerouslySetInnerHTML: {
      __html: htmlContentList[1]
    }
  }), props.hasReadMore && htmlContentList && htmlContentList[1] && showMoreCollapsed && /*#__PURE__*/React.createElement(StyledReadMore, {
    onClick: showMoreCollapseToggle
  }, props.showLessText)), props.childrenBody && /*#__PURE__*/React.createElement(StyledText, null, props.childrenBody)), /*#__PURE__*/React.createElement(StyledArrow, {
    hasCollapse: hasCollapse,
    collapsed: collapsed,
    onClick: onCollapseClick
  }));
};
export default CheckboxBase;
//# sourceMappingURL=CheckBox.js.map