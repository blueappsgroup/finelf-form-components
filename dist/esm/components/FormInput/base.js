function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { device } from '../../consts/sizes';
import { FormContext, setFormValuesToCache } from '../../utils';
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    & ${StyledRow}:first-of-type {
      flex-grow: 1;
      margin-right: 5px;
    }

    & ${StyledRow}:last-child {
      flex-grow: 1;
      margin-left: 5px;
    }
  }
`;
const StyledError = styled.span`
  color: ${props => props.theme.inputErrorColor};
  position: absolute;
  font-size: 10px;
  bottom: -14px;
`;
const StyledInput = styled.input`
  background: ${props => props.theme.inputBgColor};
  border: 1px solid
    ${props => props.theme.inputBorderColor};
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(194, 186, 186, 0.07);
  border-radius: 6px;
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 0px 20px;
  border-color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputBorderColor};
  color: ${props => props.error ? props.theme.inputErrorColor : props.theme.inputTextColor};

  &::placeholder {
    color: ${props => props.theme.inputPlaceHolderColor};
  }

  &:focus {
    outline: none;
  }
`;

const BaseField = (_ref) => {
  let {
    field,
    form: {
      touched,
      errors,
      values
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  const {
    id
  } = useContext(FormContext);

  const handleOnBlur = e => {
    setFormValuesToCache(values, id);
    field.onBlur && field.onBlur(e);
  };

  return /*#__PURE__*/React.createElement(StyledRow, null, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/React.createElement(StyledInput, _extends({}, field, props, {
    onBlur: handleOnBlur,
    type: "text",
    value: field.value && field.value || '',
    error: touched[field.name] && errors[field.name],
    placeholder: props.placeholder && `${props.placeholder}${props.required && '*' || ''}`
  })), props.showError && touched[field.name] && errors[field.name] && /*#__PURE__*/React.createElement(StyledError, null, errors[field.name]));
};

export default BaseField;
//# sourceMappingURL=base.js.map