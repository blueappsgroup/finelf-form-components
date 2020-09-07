function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import styled, { ThemeProvider } from 'styled-components';
import { device } from '../../consts/sizes';
import { theme } from '../../consts/theme';
import { FormContext, getFormValuesFromCache, resetFormValueCache } from '../../utils';
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-self: center;
  margin: 0 10px;
  background: ${props => props.theme.formBgColor};
  font-family: 'Manrope', BlinkMacSystemFont, -apple-system, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 20px 15px;
  border-radius: 6px;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.08);

  @media ${device.tablet} {
    padding: 20px 30px;
    margin: 0 auto;
  }
`;

const FormWrapper = ({
  children,
  onSubmit,
  customTheme,
  id
}) => {
  const [initialValues, setInitialValues] = useState(getFormValuesFromCache(id));

  const handleSubmit = (values, props) => {
    if (onSubmit) {
      onSubmit(values, props);
    }

    props.resetForm();
    props.setStatus('submited');
  };

  const handleReset = () => {
    resetFormValueCache(id);
    setInitialValues({});
  };

  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: {
      id
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: _objectSpread(_objectSpread({}, theme), customTheme)
  }, /*#__PURE__*/React.createElement(Formik, {
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: handleSubmit,
    onReset: handleReset
  }, /*#__PURE__*/React.createElement(StyledForm, {
    id: id
  }, children))));
};

export default FormWrapper;
//# sourceMappingURL=index.js.map